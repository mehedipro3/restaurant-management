import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
  return (
    <>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
        >
      </SectionTitle>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slide1}></img>
          <h2 className='text-2xl uppercase text-center font-bold text-white -mt-16'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2}></img>
          <h2 className='text-2xl uppercase text-center font-bold text-white -mt-16'>pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3}></img>
          <h2 className='text-2xl uppercase text-center font-bold text-white -mt-16'>soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4}></img>
          <h2 className='text-2xl uppercase text-center font-bold text-white -mt-16'>cake</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5}></img>
          <h2 className='text-2xl uppercase text-center font-bold text-white -mt-16'> Salad </h2>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Category;