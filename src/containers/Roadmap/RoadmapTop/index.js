import { ManifestoData, RoadmapData } from "common/data";
import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const ManifestoTop = () => {
  const { title, subtitle, video } = ManifestoData;
  return (
    <SectionTop
      image={<VideoTop {...video} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default ManifestoTop;
