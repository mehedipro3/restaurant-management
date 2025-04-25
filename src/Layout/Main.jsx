import Foot from "../Share/Footer/Foot.jsx";
import { Outlet } from 'react-router';
import NavBar from "../Share/NavBar/NavBar.jsx";


const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Main;