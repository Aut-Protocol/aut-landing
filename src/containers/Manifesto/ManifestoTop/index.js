import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const ManifestoTop = () => {
  return (
    <SectionTop
      image={<VideoTop />}
      title={
        <>
          Āut <br /> Map
        </>
      }
      subtitle={
        <>
          Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr,
          sed
        </>
      }
    />
  );
};

export default ManifestoTop;
