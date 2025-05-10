import Foot from "../Share/Footer/Foot.jsx";
import { Outlet, useLocation } from 'react-router';
import NavBar from "../Share/NavBar/NavBar.jsx";


const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('singUp');
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Foot></Foot>}
    </div>
  );
};

export default Main;