import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, {
  Content,
  DefinitionBox,
  DefinitionTop,
  PluralContainer,
} from "./definition.style";

const Definition = () => {
  const { definition } = AboutData;
  return (
    <Section id="about_subtitles">
      <Container>
        <Content>
          <DefinitionBox>
            <DefinitionTop>
              <Heading as="h2" content={definition.term} />
              <Text className="sub" content={definition.noun} />
            </DefinitionTop>

            <Text className="pron" content={definition.pronunciation} />
            <PluralContainer>
              <Text className="pron" content={definition.pluralTitle} />
              <Text className="pronWhite" content={definition.pluralValue} />
            </PluralContainer>
          </DefinitionBox>
        </Content>
      </Container>
    </Section>
  );
};

export default Definition;
