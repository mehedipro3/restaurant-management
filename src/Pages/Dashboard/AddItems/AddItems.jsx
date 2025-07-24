import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {

      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      }
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);

      if (menuRes.data.insertedId) {
        //show success popup
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: 'Item added Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data);

  };

  return (
    <div>
      <SectionTitle heading={'add an item'} subHeading={"what's new"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend ">Recipe Name*</legend>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-full my-3"
              placeholder="Recipe Name" />
          </fieldset>

          <div className="grid grid-cols-2 items-center gap-6">
            {/* Category */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category*</legend>
              <select defaultValue={'default'} {...register("category", { required: true })} className="select w-full"
              >
                <option disabled value={'default'}>Select a Category </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </fieldset>

            {/* Price */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price*</legend>
              <input
                {...register("price", { required: true })}
                type="number"
                className="input w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>


          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea {...register('recipe', { required: true })} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
          </fieldset>

          <div className="my-5">
            <input {...register('image', { required: true })} type="file" className="file-input file-input-ghost" />
          </div>
          <button className="btn bg-red-400" >
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>

      </div>
    </div>
  );
};

export default AddItems;