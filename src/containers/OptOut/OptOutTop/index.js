import { OptOutData } from "common/data";
import SectionTop from "containers/SectionTop";
import CircleImage from "./CircleImage";

const OptOutTop = () => {
  const { pulseButtons, title, subtitle } = OptOutData;
  return (
    <SectionTop
      hideRightOnMobile
      image={<CircleImage pulseButtons={pulseButtons} />}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default OptOutTop;
