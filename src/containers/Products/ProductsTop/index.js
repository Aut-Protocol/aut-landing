import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const ProductsTop = () => {
  const { title, subtitle, video } = ProductsData;
  return (
    <SectionTop
      image={<VideoTop disableVideo {...video} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default ProductsTop;
