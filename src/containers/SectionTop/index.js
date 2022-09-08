import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import Section, {
  ImagePreview,
  Content,
  Grid,
  RightWrapper,
} from "./sectionTop.style";
import Fade from "react-reveal/Fade";

const SectionTop = ({
  image,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  variant,
  className,
}) => {
  return (
    <Section id="section_top">
      <Container>
        <Grid>
          <Content>
            <Heading
              as={variant || "h1"}
              content={title}
              className={className}
            />
            <Text className="subtitle" content={subtitle} />
            {subtitle2 ? (
              <Text className="subtitle2" content={subtitle2} />
            ) : (
              ""
            )}
            {subtitle3 ? (
              <Text className="subtitle3" content={subtitle3} />
            ) : (
              ""
            )}
          </Content>
          <RightWrapper>
            <ImagePreview>{image}</ImagePreview>
          </RightWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
