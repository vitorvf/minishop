import { ConfirmationSectionContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import axios from "axios";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  // const { cartItemsTotal, cartQuantity } = useCart();
  // const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  // const formattedItemsTotal = formatMoney(cartItemsTotal);
  // const formattedCartTotal = formatMoney(cartTotal);
  // const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  const { totalPrice, cartItems } = useContext(CartContext);

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

  console.log(totalPrice);

  // const TotalComEntrega = totalPrice + entrega;

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {totalPrice} </RegularText>
        {/* formattedItemsTotal */}
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        {/* <RegularText>R$ {entrega} </RegularText> */}
        {/* formattedDeliveryPrice */}
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total:
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {totalPrice}
        </RegularText>
        {/* formattedCartTotal */}
      </div>

      <Button
        onClick={handleTest}
        text="Confirmar Pedido"
        disabled={totalPrice <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
