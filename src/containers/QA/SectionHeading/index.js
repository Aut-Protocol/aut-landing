import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Section from "../qa.styles";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <Section className="container">
      <Text className="title" content={title} />
      <Text className="subtitle" content={subtitle} />
    </Section>
  );
};

export default SectionHeading;
