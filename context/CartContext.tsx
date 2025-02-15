"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Cart, CartContextType, CartItem } from "@/utils/app.types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<Cart>(() => {
		let currentValue;
		try {
			currentValue = JSON.parse(localStorage.getItem("cart") || String({}));
		} catch (error) {
			currentValue = {};
		}
		return currentValue;
	});
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCartOpen = (open: boolean) => {
		if (isCartOpen !== open) {
			setIsCartOpen(open);
		}
	};

	const addToCart = (cartItem: CartItem) => {
		setCart((prevState) => ({
			...prevState,
			[cartItem.id]: cartItem,
		}));
	};

	const updateCart = (
		productId: string,
		// TODO: there should be an enum for this type
		action: "increment" | "decrement" | "remove"
	) => {
		switch (action) {
			case "increment":
				if (cart[productId].purchaseQuantity < cart[productId].stockQuantity) {
					setCart((prevState) => ({
						...prevState,
						[productId]: {
							...prevState[productId],
							purchaseQuantity: prevState[productId].purchaseQuantity + 1,
						},
					}));
				}
				break;
			case "decrement":
				if (cart[productId].purchaseQuantity > 1) {
					setCart((prevState) => ({
						...prevState,
						[productId]: {
							...prevState[productId],
							purchaseQuantity: prevState[productId].purchaseQuantity - 1,
						},
					}));
				}
				break;
			case "remove":
				setCart((prevState) => {
					const newState = { ...prevState };
					delete newState[productId];
					return newState;
				});
				break;
			default:
				throw new Error("Invalid cart action");
		}
	};

	const clearCart = () => {
		setCart({});
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				isCartOpen,
				toggleCartOpen,
				addToCart,
				updateCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("Hook must be used within CartProvider");
	}
	return context;
};
