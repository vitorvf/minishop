import Stripe from "stripe";

// Afirmamos que process.env.STRIPE_SECRET_KEY nunca será undefined
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-08-01", //@ts-ignore
  appInfo: {
    name: "Ignite Shop",
  },
});
