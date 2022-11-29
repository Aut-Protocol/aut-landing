import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, { Content } from "./aboutSubtitles.style";

const AboutSubtitles = () => {
  const { subtitles } = AboutData;
  return (
    <Section id="about_subtitles">
      {subtitles.map(({ title, description }, index) => (
        <Content key={index}>
          <span>
            <Heading as="h3" content={title} />
            <Text className="description" content={description} />
          </span>
        </Content>
      ))}
    </Section>
  );
};

export default AboutSubtitles;
