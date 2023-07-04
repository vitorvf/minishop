import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { CardCart } from "../CardCart";
import { DialogContent, DialogOverlay } from "./styles";
import { CartContext } from "@/contexts/CartContext";
import { formatMoney } from "@/utils/formatMoney";
import Link from "next/link";

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
      <DialogOverlay />
      <DialogContent>
        <Dialog.Close asChild>
          <button className="closeButton" aria-label="Close">
            <X />
          </button>
        </Dialog.Close>

        <Dialog.Title>Sacola de compras</Dialog.Title>

        <section className="contentItems">
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
        </section>

        <section className="summaryItems">
          <div>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </div>

          <div>
            <strong>Valor total</strong>
            <strong>{formattedPrice}</strong>
          </div>
          <Link href="CompleteOrder/">
            <button
              // onClick={handleTest}
              disabled={isCreatingCheckoutSession || cartCount <= 0}
            >
              {isCreatingCheckoutSession ? (
                <div>carregando</div>
              ) : (
                "Finalizar compra"
              )}
            </button>
          </Link>

          {/* <button
            onClick={handleTest}
            disabled={isCreatingCheckoutSession || cartCount <= 0}
          >

            

            {isCreatingCheckoutSession ? (
              <div>carregando</div>
            ) : (
              "Finalizar compra"
            )}
          </button> */}
        </section>
      </DialogContent>
    </Dialog.Portal>
  );
}
