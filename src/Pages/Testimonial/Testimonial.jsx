import { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('https://restaurant-management-server-7ne1m155w.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review =>
            <SwiperSlide
              key={review._id}
            >
              <div className='flex flex-col items-center space-y-7 my-12 mx-24'>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft  className='w-24 h-24'/>
                <p>{review.details}</p>
                <h2 className="text-2xl text-orange-400">{review.name}</h2>
              </div>
            </SwiperSlide>)
        }
      </Swiper>

    </section>
  );
};

export default Testimonial;