import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, { Content, ContentHalf } from "./aboutTop.style";
import AboutSubtitles from "./AboutSubtitles";
import Definition from "./Definition";
import { TitleBox } from "../AboutBottom/aboutBottom.style";

const AboutTop = () => {
  const { title, bottom } = AboutData;
  return (
    <Section id="section_top">
      <Container>
        <Content>
          <ContentHalf>
            <Heading as="h1" content={title} />
            <AboutSubtitles />
          </ContentHalf>
          <ContentHalf className="right">
            <Definition />
          </ContentHalf>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutTop;
