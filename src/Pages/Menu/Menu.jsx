import { Helmet } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuImg} 
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      {/*
      <PopularMenu></PopularMenu>
       <Cover
        img={menuImg} 
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={menuImg} 
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu></PopularMenu> */}
    </div>
  );
};

export default Menu;