import { CartContext } from "@/contexts/CartContext";
import { QuantityInput } from "../QuantityInput";
import * as S from "./styles";
import { useContext } from "react";
import Image from "next/image";

export interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  quantity?: number;
  removeProductCart: (id: string) => void; // Adicione o parâmetro 'id' aqui
}

export function CardCart({
  name,
  price,
  imageUrl,
  removeProductCart,
  id,
  quantity = 0,
}: Products) {
  const { changeCartItemQuantity } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeProductCart(id);
  };

  function handleIncrease() {
    changeCartItemQuantity(id, +1);
  }

  function handleDecrease() {
    changeCartItemQuantity(id, -1);
  }
  return (
    <S.CartItemContainer>
      <S.ImageContainer>
        <Image src={imageUrl} width={102} height={93} alt="" />
      </S.ImageContainer>
      <S.InfoContainer>
        <span>{name}</span>
        <strong>{price}</strong>
        <div className="actionsContainer">
          <QuantityInput
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <button className="removeButton">Remover</button>
        </div>
      </S.InfoContainer>
    </S.CartItemContainer>
  );
}
