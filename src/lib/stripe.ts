import Stripe from "stripe";
import React from "react";

// Afirmamos que process.env.STRIPE_SECRET_KEY nunca será undefined
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15", //@ts-ignore
  appInfo: {
    name: "Ignite Shop",
  },
});
