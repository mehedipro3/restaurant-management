import React from 'react';

const MenuItems = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex items-center space-x-4">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[120px] h-[100px] object-cover"
        src={image}
        alt={name}
      />
      <div className="flex-1">
        <h3 className="uppercase text-lg font-semibold">
          {name} <span className="text-gray-400">-------------</span>
        </h3>
        <p className="text-gray-600">{recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">${price}</p>
    </div>
  );
};

export default MenuItems;
