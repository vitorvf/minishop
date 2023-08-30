import { GetStaticProps } from "next";

import {
  HomeContainer,
  LayoutContainer,
} from "../styles/outhers/homecomponente";
import OurCoffees from "./Home/components/OurCoffees";
import React from "react";
import Intro from "./Home/components/Intro";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  defaultPriceId: string;
  metadata: string;
}

export default function Home({ products }: { products: Product[] }) {
  // console.log(products);
  return (
    <LayoutContainer>
      <Intro />
      <OurCoffees products={products} />
    </LayoutContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const metadata = product.metadata?.precoantigo || "";

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
        ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price.unit_amount / 100)
        : "",
      numberPrice: price.unit_amount ? price.unit_amount / 100 : 0,
      defaultPriceId: price.id,
      nickname: price.nickname,
      metadata: metadata,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
