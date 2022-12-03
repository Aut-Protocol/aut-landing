import Container from "common/components/Container";
import NextImage from "common/components/NextImage";
import Typography from "common/components/Typography";
import { AboutData } from "common/data";
import Section from "../aboutDesktopSections.style";
import { Content, Grid, ImagePreview, RightWrapper } from "./aboutDoMore.style";

const AboutDoMore = () => {
  const { doMore, bottom } = AboutData;

  return (
    <Section id="section_desktop">
      <Container>
        <Grid>
          <Content>
            <Typography m="0" color="white" as="h2">
              {bottom.paragraphHeading1}
            </Typography>
            <Typography mb="0" color="white" as="subtitle2" fontWeight="normal">
              {bottom.paragraph1}
            </Typography>
            <Typography mb="0" color="white" as="subtitle2" fontWeight="normal">
              {bottom.description2}
            </Typography>
          </Content>
          <RightWrapper>
            <ImagePreview>
              <NextImage src={doMore.image}></NextImage>
            </ImagePreview>
          </RightWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutDoMore;
