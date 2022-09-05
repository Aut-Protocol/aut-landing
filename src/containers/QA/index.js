import SectionTop from "containers/SectionTop";
import VideoTop from "containers/SectionTop/VideoTop";

const QATop = () => {
  return (
    <SectionTop
      image={<VideoTop />}
      title={
        <>
          ASK <br /> ĀUT
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

export default QATop;
