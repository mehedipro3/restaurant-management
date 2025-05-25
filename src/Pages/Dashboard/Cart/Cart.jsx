import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Total orders: {cart.length}</h2>
        <h2 className="text-3xl">total price : {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
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
                  <button className="btn text-red-500 text-2xl" ><MdDeleteForever /></button>
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