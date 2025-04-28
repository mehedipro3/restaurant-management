import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefServ from './ChefServ';
import PopularMenu from './PopularMenu';
import Feature from './Feature/Feature';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Homes = () => {
  return (
    <div>

      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>

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