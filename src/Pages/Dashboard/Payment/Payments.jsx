import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
  return (
    <div>
      <SectionTitle heading={'Payment'} subHeading={'Please check your money'}></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payments;