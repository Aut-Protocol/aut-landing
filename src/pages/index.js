import React from "react";
import ComingSoon from "containers/ComingSoon";
import Pillars from "containers/Pillars";
import Footer from "containers/Footer";
import MainWrapper from "./_main_wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import useWindowSize from "common/components/window-size";

const Main = () => {
  const [enabled, setEnabled] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const { width, height } = useWindowSize();

  console.log("enabled: ", width);

  return (
    <MainWrapper>
      {width > 720 ? (
        <Swiper
          init={false}
          enabled={false}
          direction={"vertical"}
          slidesPerView={1}
          height={height}
          speed={500}
          spaceBetween={0}
          mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper"
          onSwiper={(s) => setSwiper(s)}
        >
          <SwiperSlide>
            <ComingSoon
              onEnabled={() => {
                setTimeout(() => {
                  if (swiper) {
                    swiper.enable();
                    swiper.init();
                  }
                }, 500);
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pillars />
            <Footer />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <ComingSoon />
          <Pillars />
          <Footer />
        </>
      )}
    </MainWrapper>
  );
};
export default Main;
