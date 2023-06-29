import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartItems } = useContext(CartContext);

  const cartQuantity = cartItems.length;

  return (
    <HeaderContainer>
      <div className="container">
        <Link href="/">
          <div className="link-wrapper">
            <Image src={coffeeLogoImg} alt="" width={100} height={100} />
          </div>
        </Link>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <Link href="CompleteOrder/">
            <div className="link-wrapper">
              <HeaderButton variant="yellow">
                {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </div>
          </Link>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
