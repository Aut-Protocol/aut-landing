import { ManifestoData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, { Content } from "./chapters.style";
import Image from "common/components/Image";

const ManifestoChapters = () => {
  const { list, divider } = ManifestoData.chapter;
  return (
    <Section id="manifesto_chapters">
      <Container width="50%">
        <Content>
          {list.map(({ title, subtitle, description }, index) => (
            <>
              <Heading as="h3" content={title} />
              <Text as="h4" className="subtitle" content={subtitle} />
              <Text className="description" content={description} />
              {list.length - 1 > index && (
                <Image className="aut-line" src={divider.src} alt="Aut Line" />
              )}
            </>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default ManifestoChapters;
