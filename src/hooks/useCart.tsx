import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import React from "react";

export default function useCart() {
  const context = useContext(CartContext);
  return context;
}
