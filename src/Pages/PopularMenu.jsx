import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItems from '../Share/MenuItems/MenuItems';
import useMenu from '../hooks/useMenu'
const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter(item => item.category === 'popular')

  // const [menu, setMenu ] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular')
  //       setMenu(popularItems);
  //     });
  // }, [])
  return (
    <div className='mb-14'>
      <SectionTitle
        subHeading={"Popular Item"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className='grid md:grid-cols-2 gap-4 space-y-5'>
        {
          popular.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
      <div className='text-center'>
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;