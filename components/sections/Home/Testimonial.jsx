import React, { useEffect } from 'react';
import styles from '../../../styles/modules/Testimonial.module.scss';
import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import testimonialdata from '../../../data/testimonialdata';
import useWindowDimensions from '../../../helperFunctions/useWindowDimensions';
const Testimonial = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    SwiperCore.use([Autoplay]);
  }, []);
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>
          What people think <br /> About Me!
        </h2>
        <p>
          Feedbacks of real people I have worked with as a intern or a
          freelancer.
        </p>
        <button>
          My LinkedIn <AiFillLinkedin className='ml-2' />
        </button>
      </div>
      <div className={styles.cardsWrapper}>
        <Swiper
          spaceBetween={width > 600 ? 250 : 0}
          slidesPerView={width > 600 ? 2 : 1}
          loop={true}
          autoplay={true}
          navigation={true}
        >
          {testimonialdata.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <Image
                    src='/ui-elements/quote.png'
                    alt='quote'
                    width={50}
                    height={40}
                  />
                  <p className={styles.comment}>{value.comment}</p>
                  <div className={styles.info}>
                    <div className={styles.dp}></div>
                    <div>
                      <h5>{value.name}</h5>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
