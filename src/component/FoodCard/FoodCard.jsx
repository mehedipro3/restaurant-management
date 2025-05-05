
const FoodCard = ({item}) => {
  const { name, image, recipe, price } = item;
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
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;