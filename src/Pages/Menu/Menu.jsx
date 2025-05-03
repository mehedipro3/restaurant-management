import { Helmet } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  //const salad = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
 // const drinks = menu.filter(item => item.category === 'drinks');
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

        {/* main cover  */}

      <Cover
        img={menuImg}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>

      {/* offer item */}

      <MenuCategory
        items={offered}
      ></MenuCategory>

        {/* soup item  */}

      <MenuCategory
        items={desserts}
        title={"Desserts"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img={dessertImg}
      ></MenuCategory> 

        {/* pizza item  */}

      <MenuCategory
        items={pizzas}
        title={"Pizza"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img={pizzaImg}
      ></MenuCategory> 

        {/* pizza item  */}

      <MenuCategory
        items={soup}
        title={"Soup"}
        subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        img={soupImg}
      ></MenuCategory> 
      
      
    </div>
  );
};

export default Menu;