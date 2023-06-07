import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPal() {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Sunflower",
                        amount: {
                            currency_code: "USD",
                            value: 20,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };
    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
        }
    },
        [success]
    );

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "AQ--tCY2U0vaYX5l4J5ugzv-bH1COHRa7t6ajPd9YCkyQE0wpbnBGeB9IrjFQd0oZ2kPdUkLCEin0ly_",
            }}
        >
            <div>
                <div className="wrapper">
                    <div className="product-info">
                        <div className="product-price-btn">
                            <p>
                                <span>$20</span>
                            </p>
                            <button type="submit" onClick={() => setShow(true)}>
                                PayPal-Buy
                            </button>
                        </div>
                    </div>
                </div>

                {show ? (
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null}
            </div>
        </PayPalScriptProvider>
    );
}