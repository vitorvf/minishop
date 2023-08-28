import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import Image from "next/image";

// interface CoffeeCartCardProps {
//   coffee: CartItem;
// }

export function CoffeeCartCard({ product }: any) {
  const coffeeTotal = product.price * product.quantity;

  // const formattedPrice = formatMoney(coffeeTotal);

  const priceWithoutPrefix = product.price.replace("R$", "").trim();

  const { cartItems, changeCartItemQuantity, removeProductCart } =
    useContext(CartContext);

  function handleIncrease() {
    changeCartItemQuantity(product.id, +1);
  }

  function handleonDecrease() {
    changeCartItemQuantity(product.id, -1);
  }

  const handleRemoveFromCart = () => {
    removeProductCart(product.id);
  };
  // console.log(coffee.price * coffee.quantity)

  return (
    <CoffeeCartCardContainer>
      <div>
        <Image src={`${product.imageUrl}`} alt="" width={120} height={120} />

        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleonDecrease}
              quantity={product.quantity}
              size="small"
            />
            <RemoveButton onClick={handleRemoveFromCart} type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {priceWithoutPrefix}</p>
    </CoffeeCartCardContainer>
  );
}
