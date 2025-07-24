import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

            }
          })

      }
    });
  }
  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-3xl">Total orders: {cart.length}</h2>
        <h2 className="text-3xl">total price : {totalPrice}</h2>
        {cart.length ? <Link to={'/dashboard/payment'}>
          <button className="btn btn-primary">Pay</button>
        </Link>
          :
          <button disabled className="btn btn-primary">Pay</button>
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, idx) => <tr>
                <th>
                  <label>
                    {idx + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn text-red-500 text-2xl" ><MdDeleteForever />
                  </button>
                </th>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;