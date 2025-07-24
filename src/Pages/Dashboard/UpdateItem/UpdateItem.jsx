import { useLoaderData } from 'react-router';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const img_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const UpdateItem = () => {
  const { name, recipe, price, category, _id } = useLoaderData();


  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        //show success popup
        //reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} Item added Successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data);

  };

  return (
    <div>
      <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend ">Recipe Name*</legend>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              className="input w-full my-3"
              placeholder="Recipe Name" />
          </fieldset>

          <div className="grid grid-cols-2 items-center gap-6">
            {/* Category */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category*</legend>
              <select defaultValue={category} {...register("category", { required: true })} className="select w-full"
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
                defaultValue={price}
                type="number"
                className="input w-full"
                placeholder="Price"
              />
            </fieldset>
          </div>


          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
          </fieldset>

          <div className="my-5">
            <input {...register('image', { required: true })} type="file" className="file-input file-input-ghost" />
          </div>
          <button className="btn bg-red-400" >
            Update Menu Item
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateItem;