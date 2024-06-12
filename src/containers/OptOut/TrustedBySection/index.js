import React from "react";
import Container from "common/components/Container";
import SectionWrapper, {
  ButtonWrapper,
  Content,
  Grid,
  ImagePreview,
  LeftWrapper,
  SwiperContainer,
} from "./trustedBySection.style";
import { OptOutData } from "common/data";
import Button from "common/components/Button";
import Typography from "common/components/Typography";
import Footer from "containers/Footer";
import Image from "common/components/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "common/components/Box";
import ThreeK from "common/assets/image/investors/3k.svg";
import ProtocolLabs from "common/assets/image/investors/protocol-labs-svg.svg";
import Youbi from "common/assets/image/investors/youbi-transparent.png";
import Graph from "common/assets/image/investors/graph-wide.png";
import Consensys from "common/assets/image/investors/consensys-svg.svg";
import Fenbushi from "common/assets/image/investors/fenbushi-svg.svg";
import Hashkey from "common/assets/image/investors/hashkey-svg.svg";
import Eniac from "common/assets/image/investors/eniac-svg.svg";
import Pareto from "common/assets/image/investors/pareto-square.png";

const TrustedBySection = () => {
  const { title, description } = OptOutData.trustedBy;
  return (
    <SectionWrapper id="expander" className="snap space-between">
      <Container
        pt={{
          _: "50px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Content>
          <Typography
            mb={{
              md: "10px",
              xl: "15px",
              xxl: "25px",
            }}
            mt="0"
            color="white"
            as="h3"
            textAlign="center"
          >
            {title}
          </Typography>

          <SwiperContainer>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 'auto',
                  initialSlide: 0,
                },
                768: {
                  slidesPerView: 2,
                  initialSlide: 0,
                },
                990: {
                  slidesPerView: 3,
                  initialSlide: 1,
                },
                1220: {
                  slidesPerView: 4,
                  initialSlide: 1,
                },
                1366: {
                  slidesPerView: 5,
                  initialSlide: 2,
                },
                1920: {
                  slidesPerView: 5,
                  initialSlide: 2,
                },
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="image-container"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    src={ThreeK.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-container"
                  style={{
                    background:
                      "linear-gradient(323.03deg,#1f6ce0 20.31%,#4df185 118.99%)",
                  }}
                >
                  <Image
                    src={ProtocolLabs.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Consensys.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Youbi.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-container"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    src={Graph.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Fenbushi.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Hashkey.src}
                    height="100%"
                    backgroundColor="white"
                    width="100%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Eniac.src}
                    height="90%"
                    width="90%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-container">
                  <Image
                    src={Pareto.src}
                    height="100%"
                    width="100%"
                    alt="Aut Logo"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperContainer>

          <Typography
            mt={{
              md: "10px",
              xl: "25px",
              xxl: "50px",
            }}
            color="white"
            as="body"
            fontWeight="normal"
            textAlign="center"
          >
            {description}
          </Typography>
        </Content>
      </Container>
      <Footer />
    </SectionWrapper>
  );
};

export default TrustedBySection;
