import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, {
  Content,
  ContentHalf,
  ContentImage,
  Description,
  TitleBox,
} from "./aboutBottom.style";
import Typography from "common/components/Typography";
import NextImage from "common/components/NextImage";

const AboutBottom = () => {
  const { bottom } = AboutData;
  return (
    <Section id="section_bottom">
      <Container>
        <TitleBox>
          <Typography m="20px" color="white" as="h3" textAlign="center">
            {bottom.title}
          </Typography>
          <Typography
            m="0 20px 20px 20px"
            color="white"
            as="h3"
            textAlign="center"
            display={{
              _: "none",
              md: "flex",
            }}
          >
            {bottom.subtitle}
          </Typography>
        </TitleBox>
        <Content>
          <Description>
            <ContentHalf>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.description1}
              </Typography>
              <Typography
                m="30px 0"
                color="white"
                as="body"
                textAlign="left"
                fontWeight="bold"
              >
                {bottom.paragraphHeading1}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.paragraph1}
              </Typography>
            </ContentHalf>
            <ContentHalf>
              <Typography m="50px" color="white" as="h3" textAlign="center">
                {bottom.subtitle}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.description2}
              </Typography>
              <Typography
                m="30px 0"
                color="white"
                as="body"
                textAlign="left"
                fontWeight="bold"
              >
                {bottom.paragraphHeading2}
              </Typography>
              <Typography m="0" color="white" as="body" textAlign="left">
                {bottom.paragraph2}
              </Typography>
            </ContentHalf>
          </Description>
        </Content>
        <ContentImage>
          <NextImage src={bottom.image}></NextImage>
        </ContentImage>
      </Container>
    </Section>
  );
};

export default AboutBottom;
