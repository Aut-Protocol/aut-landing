import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, { Content } from "./aboutSubtitles.style";

const AboutSubtitles = () => {
  const { subtitles } = AboutData;
  return (
    <Section id="about_subtitles">
      <Container>
        <Content>
          {subtitles.map(({ title, description }, index) => (
            <>
              <Heading as="h3" content={title} />
              <Text className="description" content={description} />
            </>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default AboutSubtitles;
