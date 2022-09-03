import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import CircleImage from "./CircleImage";
import Section, { AppPreview, Content, Grid } from "./sectionTop.style";

const SectionTop = () => {
  return (
    <Section id="section_top">
      <Container>
        <Grid>
          <Content>
            <Heading as="h1" content="Opt" />
            <Heading as="h1" content="Āut" />
            <Text content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
          </Content>
          <AppPreview>
            <CircleImage />
          </AppPreview>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
