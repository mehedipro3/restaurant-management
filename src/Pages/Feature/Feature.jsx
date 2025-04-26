import SectionTitle from "../../SectionTitle/SectionTitle";
import featureImg from '../../assets/home/featured.jpg'
import "./Feature.css"
const Feature = () => {
  return (
    <div className="feature-item bg-fixed mt-14 pb-10 pt-12 px-10">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Feature Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center  ">
        <div>
          <img className="object-cover" src={featureImg} alt="" />
        </div>
        <div className="md: ml-10 space-y-2 text-white">
          <p>Sep 25,2009</p>
          <p className="uppercase font-semibold">Where i can get some ?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur facilis inventore saepe aliquam maiores cum. Rerum aspernatur saepe, ab repellendus ad eveniet dignissimos! Culpa officia aut molestias tempore numquam illum illo temporibus! Eaque dolorum, alias temporibus itaque non quibusdam?</p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>

    </div>
  );
};

export default Feature;