import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Elements } from '@stripe/stripe-js';



const stripePromise = loadStripe('');

const Payments = () => {
  return (
    <div>
      <SectionTitle heading={'Payment'} subHeading={'Please check your money'}></SectionTitle>

      <Elements stripe={stripePromise}>


      </Elements>
    </div>
  );
};

export default Payments;