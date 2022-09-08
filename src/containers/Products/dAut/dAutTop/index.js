import { ProductsData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const DAutTop = () => {
  const { title, subtitle, video, className} = ProductsData.dAut;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
      className={className}
    />
  );
};

export default DAutTop;
