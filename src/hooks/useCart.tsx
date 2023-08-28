import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import React from "react";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
