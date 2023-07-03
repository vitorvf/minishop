import styled from "styled-components";
import { RegularText, TitleText } from "../../../../components/Typography";

export const CoffeeCardContainer = styled.div`
  /* width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */

  border-radius: 4px;
  width: 100%;
  background: white;
  /* border-radius: 6px 36px 6px 36px; */
  /* padding: 1.25rem; */
  padding: 15px;
  /* padding-top: 0; */
  display: flex;
  flex-direction: column;
  /* align-items: center;
  text-align: center; */

  img {
    /* width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem; */
  }

  &:hover {
    box-shadow: 0 0 0 1px #dfe1e5, 0 0 15px 0 #dfe1e5;
  }

  /* 
  &:hover {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    // ================= KEYFRAMES ================= //
    @keyframes scale-up-center {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  } */
`;

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;

  img {
    display: inline;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
`;
export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  /* margin-top: 1rem; */
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-green-300"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const CardName = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #747474;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  line-height: 1;
`;

export const PriceBefore = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #747474;
  text-decoration: line-through;
`;

export const PriceNow = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #192c53;
`;

export const ProductAction = styled.div`
  height: auto;
  overflow: visible;
  margin-top: 15px;
`;

export const ButtonAction = styled.button`
  justify-content: center;
  display: flex;

  font-size: 16px;
  font-weight: 800;
  color: #192c53;
  width: 100%;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #192c53;
  background: none;
  padding: 10px;

  &:hover {
    background: #192c53;
    color: white;
  }

  svg {
    margin-right: 10px;
  }
`;

export const DivTags = styled.div`
  display: flex;
  margin: 9px 0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Lancamento = styled.div`
  color: white;
  background: #192c53;

  padding: 1px 8px;
  margin-right: 9px;
  margin-bottom: 6px;
  border: 1px solid #192c53;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
`;

export const Personalize = styled.div`
  color: #192c53;
  border-color: #192c53;
  padding: 1px 8px;
  margin-right: 9px;
  margin-bottom: 6px;
  border: 1px solid #192c53;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
`;

export const DivSpan = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #192c53;
  line-height: 1;
  margin-top: 5px;
`;

export const SpanPrecoAvista = styled.span`
  font-size: inherit;
  font-weight: inherit;
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "gray",
})`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  color: "gray",
})`
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["brand-green-300"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-green-200"]};
    }
  }
`;
