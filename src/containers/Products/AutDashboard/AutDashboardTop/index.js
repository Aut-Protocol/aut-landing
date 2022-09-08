import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const ProductsDashboardTop = () => {
  const { title, subtitle, video } = ProductsData.dashboard;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default ProductsDashboardTop;
