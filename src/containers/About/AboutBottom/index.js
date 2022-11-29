import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, {
  Content,
  ContentHalf,
  Description,
  TitleBox,
} from "./aboutBottom.style";

const AboutBottom = () => {
  const { bottom } = AboutData;
  return (
    <Section id="section_bottom">
      <Container>
        <TitleBox>
          <Text className="heading" content={bottom.title} />
          <Text className="subtitle" content={bottom.subtitle} />
        </TitleBox>
        <Content>
          <Description>
            <ContentHalf>
              <Text className="description" content={bottom.description1} />
              <Text
                className="paragraphHeading"
                content={bottom.paragraphHeading1}
              />
              <Text className="description" content={bottom.paragraph1} />
            </ContentHalf>
            <ContentHalf>
              <Text className="subtitleMobile" content={bottom.subtitle} />
              <Text className="description" content={bottom.description2} />
              <Text
                className="paragraphHeading"
                content={bottom.paragraphHeading2}
              />
              <Text className="description" content={bottom.paragraph2} />
            </ContentHalf>
          </Description>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutBottom;
