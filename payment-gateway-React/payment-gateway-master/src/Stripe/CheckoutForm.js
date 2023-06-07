import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutForm = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51M5QJeSAOFagUnsl0K7aPh4aI9Gw0KHaWzj6RgaIhVtiq7dAcgWcE89paSHwRB8Vv4ojNmsHb1zFPkFiFWjAjL8c001uprsgcq';


    const onToken = (token, payment_methods) => {
        console.log(payment_methods);
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Colebrooknow'
            billingAddress
            shippingAddress
            image='https://colebrooknow.com/admin/public/uploads/all/Frame.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default CheckoutForm;