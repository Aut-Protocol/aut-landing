import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, { ImagePreview, Content, Grid } from "./sectionTop.style";
import Fade from "react-reveal/Fade";

const SectionTop = ({ image, title, subtitle, variant, className }) => {
  return (
    <Section id="section_top">
      <Container>
        <Grid>
          <Content>
            <Heading as={variant || 'h1'} content={title} className={className}/>
            <Text className="subtitle" content={subtitle} />
          </Content>
          <ImagePreview>{image}</ImagePreview>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
