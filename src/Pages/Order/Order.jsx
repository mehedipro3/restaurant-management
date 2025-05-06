import { useState } from 'react';
import OrderCoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../Share/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router';


const Order = () => {
  const categories = ['salad', 'pizza' , 'soup' , 'dessert' , 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const salad = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');


  return (
    <div>
      <Cover img={OrderCoverImg} title={'Our Order'} subTitle={'Would you like to try a dish?'}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default Order;
