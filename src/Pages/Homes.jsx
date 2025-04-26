import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefServ from './ChefServ';
import PopularMenu from './PopularMenu';
import Feature from './Feature/Feature';
import Testimonial from './Testimonial/Testimonial';

const Homes = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefServ></ChefServ>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Homes;