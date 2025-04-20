import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!);

export const POST = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  return NextResponse.json(paymentIntent.client_secret);
};

//also use frontend like "form" using stripe
