import logo from './logo.svg';
import './App.css';
import Stripe from './Stripe/Stripe'
import Razorpay from './Razorpay/Razorpay'
import CheckoutForm from './Stripe/CheckoutForm';
import PayPal from './PayPal/PayPal';
function App() {
  return (
    <div className="App">
      <p>----------stripe----------</p>
      <Stripe />
      <p>----------Razorpay----------</p>
      <Razorpay />
      {/* <CheckoutForm /> */}
      <p>----------PayPal----------</p>
      <PayPal />
    </div>
  );
}

export default App;
