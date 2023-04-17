import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  return <div className='about'>
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
    >
      <SwiperSlide>
        <div className='wrapper pic-1'>
          <div className='slide'>
            <div className='title'>Fish ProdEx</div>
            <div className='text'>ТОО «FishProdEx» является одним из ведущих производственных предприятий в Казахстане, специализирующихся на производстве рыбной продукции высокого качества.</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='wrapper pic-2'>
          <div className='slide'>
            <div className='title'>Fish ProdEx</div>
            <div className='text'>На производственных линиях ТОО «FishProdEx» производится более 100 видов продукции. Мы предлагаем широкий ассортимент рыбной продукции, включая разделанную рыбу, рыбные филе и тушки мороженые, вяленую рыбу, а также различные виды рыбных полуфабрикатов.</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='wrapper pic-3'>
          <div className='slide'>
            <div className='title'>Fish ProdEx</div>
            <div className='text'>Ежегодно ТОО «FishProdEx» производит более 2000 тонн высококачественной рыбной продукции, которая поставляется как на внутренний, так и на внешний рынок.</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='wrapper pic-4'>
          <div className='slide'>
            <div className='title'>Fish ProdEx</div>
            <div className='text'>Благодаря разнообразию производимой продукции, ассортимент ТОО «FishProdEx» достаточно широк, чтобы заполнить рыбную полку в каждом магазине.</div>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  </div >;
};

export default About;