
const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className="w-3/12 my-8 text-center mx-auto">
      <p className="text-yellow-500 py-2">---{subHeading}---</p>
      <h2 className="text-3xl uppercase border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;