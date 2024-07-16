import React, { createContext, useContext, useState } from "react";
import { CartContextType } from "@/utils/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCartOpen = (open: boolean) => {
		if (isCartOpen !== open) {
			setIsCartOpen(open);
		}
	};

	return (
		<CartContext.Provider value={{ isCartOpen, toggleCartOpen }}>
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
