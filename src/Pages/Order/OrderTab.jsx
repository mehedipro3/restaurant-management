import FoodCard from "../../component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

  const itemPerPage = 10;
  const numberOfPages = Math.ceil(57 / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];




  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div >
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {
            pages.map((item,inx) => <SwiperSlide key={inx}>
              <div className='grid md:grid-cols-3 gap:10 space-y-5'>
                {
                  items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                  ></FoodCard>)
                }
              </div>
            </SwiperSlide>)
          }
        </div>

      </Swiper>
    </div>
  );
};

export default OrderTab;