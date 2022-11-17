import NextImage from "common/components/NextImage";
import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";
import ProductsPageImage from "common/assets/image/aut-suite.svg";
import useWindowSize from "common/components/window-size";

const ProductsTop = () => {
  const { title, subtitle, video } = ProductsData;
  const { width } = useWindowSize();

  return (
    <>
      {width < 992 ? (
        <SectionTop
          image={<VideoTop disableVideo {...video} />}
          title={title}
          subtitle={subtitle}
        />
      ) : (
        <SectionTop
          id="section_top"
          image={<NextImage src={ProductsPageImage} />}
          title={title}
          subtitle={subtitle}
          style={{
            paddingBottom: "10rem",
          }}
        />
      )}
    </>
  );
};

export default ProductsTop;
