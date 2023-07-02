import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
  ImageCard,
  CardName,
  Price,
  PriceBefore,
  PriceNow,
  ProductAction,
  ButtonAction,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { MouseEvent, useContext, useState } from "react";
import { formatMoney } from "../../../../utils/formatMoney";
import { CartContext } from "../../../../contexts/CartContext";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ product }: any) {
  const { cartItems } = useCart();
  console.log(cartItems);
  function handleAddToCart(
    event: MouseEvent<HTMLButtonElement>,
    products: any,
    quantity: number
  ) {
    event.preventDefault();
    addToCart(product, quantity);
  }

  const priceWithoutPrefix = product.price.replace("R$", "").trim();

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  // function handleAddToCart() {
  //   addToCart(coffee, quantity);
  // }

  // const formattedPrice = formatMoney(coffee.price);
  // Tamanho de imagem 120
  return (
    <CoffeeCardContainer>
      <ImageCard>
        <Image src={`${product.imageUrl}`} alt="" width={244} height={244} />
      </ImageCard>
      <Tags>
        {/* {product.tags.map((tag) => (
          <span key={`${product.id}${tag}`}>{tag}</span>
        ))} */}
        <span>teste tag</span>
      </Tags>

      <CardName>
        {/* <Name>{product.name}</Name> */}
        {product.name}
      </CardName>
      <Price>
        <PriceBefore>
          R$<span>269,90</span>
        </PriceBefore>

        <PriceNow>
          <span content="R$129.90">R${priceWithoutPrefix}</span>
        </PriceNow>
      </Price>

      {/* <Description>
        Expresso diluído, menos intenso que o tradicional
      </Description> */}

      <ProductAction>
        <ButtonAction onClick={(event) => handleAddToCart(event, product, 1)}>
          <ShoppingCart weight="fill" size={21} />
          Adicionar
        </ButtonAction>
      </ProductAction>
      {/* <CardFooter>
        <div>
          <RegularText color="gray" size="s">
            R$
          </RegularText>
          <TitleText size="m" color="gray" as="strong">
            {priceWithoutPrefix}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={(event) => handleAddToCart(event, product, 1)}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter> */}
    </CoffeeCardContainer>
  );
}
