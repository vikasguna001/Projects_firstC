import React, { useEffect, useState } from 'react';

const Razorpay = () => {

    const [Amount, setAmount] = useState();
    const [msg, setmsg] = useState('');

    console.log(Amount);
    const options = {
        key: 'rzp_test_ii0W1QDV7ASF82',
        amount: Amount * 100, //  = INR 1
        name: 'colebrook',
        description: 'some description',
        image: 'https://colebrooknow.com/admin/public/uploads/all/Frame.svg',
        handler: function (response) {
            console.log(response);
            setmsg(response?.razorpay_payment_id)
        },
        prefill: {
            name: 'vikas',
            contact: '735900265',
            email: 'vikas@gmail.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <input value={Amount} onChange={(e) => { setAmount(e.target.value) }} />
            <button onClick={openPayModal}>Pay with Razorpay</button>

            <h1>{msg}</h1>
        </>
    );
};

export default Razorpay;