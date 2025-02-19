import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import Authcontext from "../context/Authcontext/Authcontext"

import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CheckoutContact = () => {
  const { user } = useContext(Authcontext);
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { biodataId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
      setLoading(false);
      return;
    }

    try {
      const paymentResponse = await axiosSecure.post("create-paymet-intent", {
        paymentMethodId: paymentMethod.id,
        biodataId,
        email: user.email,
        amount: 500, 
      });

      if (paymentResponse.data.success) {
        Swal.fire("Success", "Payment successful! Your request is pending approval.", "success");
        navigate("/dashboard/my-contact-requests");
      } else {
        Swal.fire("Error", "Payment failed. Try again.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong!", "error");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Checkout
        </Typography>
        <Typography variant="lead" className="mt-2">
          You are requesting contact information for Biodata ID: {biodataId}
        </Typography>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 bg-gray-100 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Card Details</label>
            <CardElement className="p-3 border rounded bg-gray-50" />
          </div>

          <Button
            type="submit"
            color="blue"
            disabled={!stripe || loading}
            className="w-full mt-4"
          >
            {loading ? "Processing..." : "Pay $5"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CheckoutContact;
