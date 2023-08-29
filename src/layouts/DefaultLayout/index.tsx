import OurCoffees from "@/pages/Home/components/OurCoffees";
import { LayoutContainer } from "./styles";
import Home from "@/pages";
// import { Outlet } from "react-router-dom";
import React from "react";
import Header from "@/components/Header";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* <Outlet /> */}
    </LayoutContainer>
  );
}
