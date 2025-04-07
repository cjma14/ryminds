import SingleBrand from "./SingleBrand";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


interface PropTypes {
  data: string[];
  dataLight: string[];
}

const Brands = ({ data, dataLight }: PropTypes) => {
  return (
    <>
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <motion.span
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 animate_top">
            
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            freeMode={true}
            spaceBetween={20}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 0.5,
              disableOnInteraction: false,
            }}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                <SingleBrand
                  brand={item}
                  lightBrand={dataLight[key]}
                  id={key}
                  key={key}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.span>
      </section>
    </>
  );
};

export default Brands;
