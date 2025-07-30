import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";
import { FiCheckSquare } from "react-icons/fi";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-red-300">
        <ul className="menu p-4">

          {
            isAdmin ?

              <>
                <li>
                  <NavLink to='/dashboard/adminHome'>
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/addItems'>
                    <FaUtensils></FaUtensils>
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/manageItems'>
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/manageBooking'>
                    <FiCheckSquare />
                    Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/users'>
                    <FaUser></FaUser>
                    All Users
                  </NavLink>
                </li>
              </>
              :
              <>
                <li>
                  <NavLink to='/dashboard/userHome'>
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/reservation'>
                    <FaCalendar></FaCalendar>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/review'>
                    <FaAd></FaAd>
                    Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/paymentHistory'>
                    <FaList></FaList>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/cart'>
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})
                  </NavLink>
                </li>
              </>
          }
          <div className="divider"></div>
          {/* shared part */}
          <li>
            <NavLink to='/'>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/contact'>
              <FaVoicemail></FaVoicemail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;