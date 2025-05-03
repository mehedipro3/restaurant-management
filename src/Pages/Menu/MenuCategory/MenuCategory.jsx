import Cover from "../../../Share/Cover/Cover";
import MenuItems from "../../../Share/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img , subTitle}) => {
  return (
    <div className="pt-16">
      {title && <Cover img={img} title={title} subTitle={subTitle} ></Cover>}
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        {
          items.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
      <div className='text-center pb-4'>
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default MenuCategory;
