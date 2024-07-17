"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem } from "@/utils/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	// { product_id: count, ... }
	const [cart, setCart] = useState<{ [productId: string]: CartItem }>(() => {
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
		action: "increment" | "decrement" | "remove"
	) => {
		switch (action) {
			case "increment":
				setCart((prevState) => ({
					...prevState,
					[productId]: {
						...prevState[productId],
						quantity: prevState[productId].quantity + 1,
					},
				}));
				break;
			case "decrement":
				setCart((prevState) => ({
					...prevState,
					[productId]: {
						...prevState[productId],
						quantity: prevState[productId].quantity - 1,
					},
				}));
				break;
			case "remove":
				setCart((prevState) => {
					const newState = { ...prevState };
					delete newState[productId];
					return newState;
				});
				break;
			default:
				throw new Error("invalid cart action");
		}
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider
			value={{ isCartOpen, toggleCartOpen, cart, updateCart, addToCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
