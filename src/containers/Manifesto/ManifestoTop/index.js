import { ManifestoData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, { Content } from "./sectionTop.style";

const ManifestoTop = () => {
  const { title, subtitle } = ManifestoData;
  return (
    <Section id="section_top">
      <Container>
        <Content>
          <Heading as="h1" content={title} />
          <Text className="description" content={description} />
        </Content>
      </Container>
    </Section>
  );
};

export default ManifestoTop;
