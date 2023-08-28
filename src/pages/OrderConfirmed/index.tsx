// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import Image from "next/image";
// import { RegularText, TitleText } from "../../components/Typography";
// import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
// import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
// import { InfoWithIcon } from "../../components/InfoWithIcon";
// import { useTheme } from "styled-components";
// import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
// import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";

// export function OrderConfirmedPage() {
//   const { colors } = useTheme();
//   const router = useRouter();
//   const { state } = router.query;

//   useEffect(() => {
//     if (!state) {
//       router.push("/");
//     }
//   }, []);

//   if (!state) return <></>;

//   return (
//     <OrderConfirmedContainer className="container">
//       <div>
//         <TitleText size="l">Uhu! Pedido confirmado</TitleText>
//         <RegularText size="l" color="subtitle">
//           Agora é só aguardar que logo o café chegará até você
//         </RegularText>
//       </div>

//       <section>
//         <OrderDetailsContainer>
//           <InfoWithIcon
//             icon={<MapPin weight="fill" />}
//             iconBg={colors["brand-purple"]}
//             text={
//               <RegularText>
//                 Entrega em <strong>{state.street}</strong>, {state.number}
//                 <br />
//                 {state.district} - {state.city}, {state.uf}
//               </RegularText>
//             }
//           />

//           <InfoWithIcon
//             icon={<Clock weight="fill" />}
//             iconBg={colors["brand-yellow"]}
//             text={
//               <RegularText>
//                 Previsão de entrega
//                 <br />
//                 <strong>20 min - 30 min</strong>
//               </RegularText>
//             }
//           />

//           <InfoWithIcon
//             icon={<CurrencyDollar weight="fill" />}
//             iconBg={colors["brand-yellow-dark"]}
//             text={
//               <RegularText>
//                 Pagamento na entrega
//                 <br />
//                 <strong>{paymentMethods[state.paymentMethod].label}</strong>
//               </RegularText>
//             }
//           />
//         </OrderDetailsContainer>
//         <Image
//           src={confirmedOrderIllustration}
//           alt=""
//           width={100}
//           height={100}
//         />
//       </section>
//     </OrderConfirmedContainer>
//   );
// }
