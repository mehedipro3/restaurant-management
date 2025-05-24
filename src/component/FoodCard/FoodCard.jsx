import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const FoodCard = ({ item }) => {

  const { name, image, recipe, price, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();


  const handleAddTOCart = food => {

    if (user && user.email) {
      //Todo : add to cart database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        price,
        name
      }
      axiosSecure.post('/carts', cartItem)
        .then(result => {
          console.log(result.data);
          if (result.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Added to your Cart`,
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
    }

    else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to Add To Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send to login page
          navigate('/login', { state: { from: location } });
        }
      });
    }

  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={name}
            className="rounded-xl" />
        </figure>
        <p className="absolute right-0 mr-3 mt-3 py-1 px-2  bg-gray-800 text-white ">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => handleAddTOCart(item)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;