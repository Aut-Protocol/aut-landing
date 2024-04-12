import Container from "common/components/Container";
import Image from "common/components/Image";
import NextImage from "common/components/NextImage";
import Typography from "common/components/Typography";
import { AboutData } from "common/data";
import Section, { ButtonWrapper, Content, Grid, ImagePreview, RightWrapper } from "./aboutDoMore.style";
import Button from "common/components/Button";

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
            <ButtonWrapper>
              <Button
                title={bottom.link.title}
                href={bottom.link.path}
                target="_blank"
                as="a"
                variant="roundOutlined"
                fontWeight="bold"
                size="normal"
                colors="primary"
                mt={{
                  _: "33px",
                  md: "40px",
                  xxl: "56px",
                }}
              />
            </ButtonWrapper>
            {/* <Typography mb="0" color="white" as="subtitle2" fontWeight="normal">
              {bottom.description2}
            </Typography> */}
          </Content>
          <RightWrapper>
            <ImagePreview>
              <Image src={doMore.image} alt="Image" />
            </ImagePreview>
          </RightWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutDoMore;
