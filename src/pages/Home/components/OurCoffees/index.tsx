import React from "react";
import { CoffeeList, OurCoffeesContainer } from "../../../../styles/outhers/ourcoffees";
import { TitleText } from "@/src/components/Typography";
import Link from "next/link";
import CoffeeCard from "../CoffeeCard";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  defaultPriceId: string;
}

interface OurCoffeesProps {
  products: Product[];
}

export default function OurCoffees({ products }: OurCoffeesProps) {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos
      </TitleText>

      <CoffeeList>
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <CoffeeCard key={product.id} product={product} />
          </Link>
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  );
}
