import { MdDelete } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";


const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }

      }
    });
  }

  return (
    <div>
      <SectionTitle heading={'Manage Items'} subHeading={'Hurry Up'}></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, idx) => <tr key={item._id}>
                <td>
                  {
                    idx + 1
                  }
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  ${item.price}
                </td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button
                      className="btn btn-sm bg-red-500 text-2xl"> <FaEdit className="text-white"></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn text-red-500 text-2xl"> <MdDelete />
                  </button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;