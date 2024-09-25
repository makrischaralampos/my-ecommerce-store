import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@chakra-ui/react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutButton({ cartItems }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const stripe = await stripePromise;

    // Call the API route to create a Checkout session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
      }),
    });

    const { id } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: id,
    });

    if (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Button
      mt={6}
      colorScheme="teal"
      size="lg"
      width={["100%", "auto"]}
      onClick={handleCheckout}
      isLoading={loading}
    >
      Checkout
    </Button>
  );
}
