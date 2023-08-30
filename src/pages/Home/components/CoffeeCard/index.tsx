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
  Lancamento,
  DivTags,
  Personalize,
  SpanPrecoAvista,
  DivSpan,
} from "../../../../styles/outhers/coffecard";
import { ShoppingCart } from "phosphor-react";
import { MouseEvent, useContext, useState } from "react";
import { formatMoney } from "../../../../utils/formatMoney";
import { CartContext } from "../../../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/src/hooks/useCart";
import Image from "next/image";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  nickname: string;
  metadata: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export default function CoffeeCard({ product }: any) {
  const { cartItems } = useCart();
  // console.log(cartItems);
  function handleAddToCart(event: any, products: any, quantity: number) {
    event.preventDefault();
    addToCart(product, quantity);
  }

  const priceWithoutPrefix = product?.price.replace("R$", "").trim();
  const precoantigo = product?.metadata || "";
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product || !product.imageUrl) {
    return <div>Produto não encontrado</div>;
  }

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

      <DivTags>
        <Lancamento>Lançamento</Lancamento>
        <Personalize>Personalize</Personalize>
      </DivTags>

      <CardName>{product.name}</CardName>
      <Price>
        <PriceBefore>
          R$<span>{precoantigo}</span>
        </PriceBefore>

        <PriceNow>
          <span content="R$129.90">
            R$
            {product?.price ? (
              <span content={`R$${priceWithoutPrefix}`}>
                R${priceWithoutPrefix}
              </span>
            ) : (
              <span>Price Not Available</span>
            )}
          </span>
        </PriceNow>
      </Price>

      <DivSpan>
        <SpanPrecoAvista>
          R$
          <span>
            <span>
              116
              <span>
                ,<span>91</span>
              </span>
            </span>
          </span>
        </SpanPrecoAvista>

        <span>
          {" "}
          à <span> vista </span>
        </span>
        <span>
          com
          <span> desconto via PIX </span>
        </span>
      </DivSpan>

      <ProductAction>
        <ButtonAction
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleAddToCart(event, product, 1)
          }
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Adicionar
        </ButtonAction>
      </ProductAction>
    </CoffeeCardContainer>
  );
}
