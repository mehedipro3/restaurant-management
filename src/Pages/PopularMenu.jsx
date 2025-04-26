import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItems from '../Share/MenuItems/MenuItems';

const PopularMenu = () => {
  const [menu, setMenu ] = useState([]);
  console.log(menu);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems);
      });
  }, [])
  return (
    <div className='mb-14'>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          menu.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>

    </div>
  );
};

export default PopularMenu;