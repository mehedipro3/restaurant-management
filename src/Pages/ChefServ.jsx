import chefSer from '../assets/home/chef-service.jpg';

const ChefServ = () => {
  return (

    <div className='py-14'>
      <img className='relative' src={chefSer} alt="chef-service" />
      <div className='text-center text-black bg-white absolute -my-96 p-20 ml-40 space-y-3'>
        <h2 className='text-4xl font-semibold'>Bistro Boss</h2>
        <p>At Bistro Boss, we believe every dish tells a story. Crafted with passion and served with care, <br /> our menu celebrates the freshest ingredients and timeless flavors. Join us for an unforgettable dining  <br /> experience where taste meets artistry.</p>
      </div>
    </div>

  );
};

export default ChefServ;