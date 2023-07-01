import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CardCart } from "../CardCart";
import {
  ButtonClose,
  ButtonFinishCart,
  CartContainer,
  CartContent,
  CartContentInfo,
  CartPriceContent,
  CartQuantityContent,
} from "./styles";
import { CartContext } from "@/contexts/CartContext";
import { formatMoney } from "@/utils/formatMoney";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
  quantity?: number;
}

export function Cart() {
  const { cartItems, removeProductCart, totalPrice } = useContext(CartContext);

  const cartCount = cartItems.length;

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleTest() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  const formattedPrice = formatMoney(totalPrice);

  return (
    <Dialog.Portal>
      <CartContainer>
        <ButtonClose>
          <X weight="bold" />
        </ButtonClose>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CartContent>
          {cartItems.length <= 0 && (
            <p>Seu carrinho está sem produtos, vamos comprar algo novo!!</p>
          )}

          {Object.entries(cartItems).map(([itemId, item]) => (
            <CardCart
              key={itemId}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              id={item.id}
              quantity={item.quantity}
              removeProductCart={removeProductCart}
            />
          ))}
        </CartContent>

        <CartContentInfo>
          <CartQuantityContent>
            <p>Quantidade</p>
            <span>{cartCount} itens</span>
          </CartQuantityContent>
          <CartPriceContent>
            <p>Valor total</p>
            <strong>R$ {formattedPrice}</strong>
          </CartPriceContent>

          <ButtonFinishCart onClick={handleTest} type="button">
            Finalizar Compra
          </ButtonFinishCart>
        </CartContentInfo>
      </CartContainer>
    </Dialog.Portal>
  );
}
