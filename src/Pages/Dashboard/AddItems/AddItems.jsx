import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)

  };

  return (
    <div>
      <SectionTitle heading={'add an item'} subHeading={"what's new"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend ">Recipe Name*</legend>
            <input
              {...register("name")}
              type="text"
              className="input w-full my-6"
              placeholder="Recipe Name" />
          </fieldset>

          <div className="grid grid-cols-2 items-center gap-6">
            {/* category */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend ">Category*</legend>
              <select {...register("category")}
                defaultValue={'Select a Category '} className="select w-full">
                <option >Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </fieldset>

            {/* price */}

            <fieldset className="fieldset ">
              <legend className="fieldset-legend ">Price*</legend>
              <input
                {...register("price")}
                type="number"
                className="input my-6 w-full"
                placeholder="Price" />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea {...register('recipe')} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
          </fieldset>

          <div className="my-5">
            <input {...register('image')} type="file" className="file-input file-input-ghost" />
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