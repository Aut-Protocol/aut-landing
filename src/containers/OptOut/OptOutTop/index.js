import SectionTop from "containers/SectionTop";
import CircleImage from "./CircleImage";

const OptOutTop = () => {
  return (
    <SectionTop
      image={<CircleImage />}
      title={
        <>
          OPT <br /> ĀUT
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

export default OptOutTop;
