import { AboutData } from "common/data";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, {
  Content,
  DefinitionBox,
  DefinitionItem,
  DefinitionTop,
  SameLineContainer,
} from "./definition.style";

const Definition = () => {
  const { definition } = AboutData;

  return (
    <Section id="about_subtitles">
      <Content>
        <DefinitionBox>
          <DefinitionTop>
            <Heading as="h2" content={definition.term} />
            <Text className="sub" content={definition.noun} />
          </DefinitionTop>

          <Text className="pron" content={definition.pronunciation} />
          <SameLineContainer>
            <Text className="pron" content={definition.pluralTitle} />
            <Text className="pron white" content={definition.pluralValue} />
          </SameLineContainer>

          <SameLineContainer>
            <Text className="sub" content={definition.defintionTitle} />
            <Text className="sub white" content={definition.term} />
          </SameLineContainer>
          {definition.definitions.map((n, i) => {
            return (
              <DefinitionItem key={i}>
                <Text className="description" content={i} />
                <Text className="description" content={n} />
              </DefinitionItem>
            );
          })}
        </DefinitionBox>
      </Content>
    </Section>
  );
};

export default Definition;
