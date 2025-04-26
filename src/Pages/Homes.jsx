import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefServ from './ChefServ';
import PopularMenu from './PopularMenu';

const Homes = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefServ></ChefServ>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Homes;