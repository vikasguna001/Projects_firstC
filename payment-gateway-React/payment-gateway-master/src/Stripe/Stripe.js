import React, { useState } from 'react'
import CheckoutForm from './CheckoutForm'
function Stripe() {
    const totalPrice = 58;
    const [name, setname] = useState('')
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <input value={name} onChange={(e) => { setname(e.target.value) }} placeholder='please enter price' />
                    <p>
                        Pay Total of $ {name}
                    </p>
                    <p>
                        <CheckoutForm price={name} />
                    </p>
                </header>
            </div>
        </div>
    )
}

export default Stripe
