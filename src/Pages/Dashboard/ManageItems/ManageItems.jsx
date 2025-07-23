import { MdDelete } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";


const ManageItems = () => {
  const [menu] = useMenu();

  const handleDelete = id => {
    console.log(id);
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
                  <button
                    //onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm bg-red-500 text-2xl"> <FaEdit className="text-white"></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
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