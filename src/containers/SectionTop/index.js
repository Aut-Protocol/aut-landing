import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, { ImagePreview, Content, Grid } from "./sectionTop.style";

const SectionTop = ({ image, title, subtitle }) => {
  return (
    <Section id="section_top">
      <Container>
        <Grid>
          <Content>
            <Heading as="h1" content={title} />
            <Text className="subtitle" content={subtitle} />
          </Content>
          <ImagePreview>{image}</ImagePreview>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
