import { useLoaderData } from 'react-router';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  
  return (
    <div>
      <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'}></SectionTitle>
    </div>
  );
};

export default UpdateItem;