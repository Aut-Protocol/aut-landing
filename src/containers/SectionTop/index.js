import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Container from "common/components/Container";
import Section, {
  ImagePreview,
  Content,
  Grid,
  RightWrapper,
  ButtonWrapper,
} from "./sectionTop.style";
import Fade from "react-reveal/Fade";

const SectionTop = ({
  image,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  headerButton,
  variant,
  className,
  hideRightOnMobile,
}) => {
  return (
    <Section id="section_top" className={className}>
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
          <RightWrapper className={hideRightOnMobile ? "hide-on-mobile" : ""}>
            <ImagePreview>{image}</ImagePreview>
            {headerButton ? <ButtonWrapper>{headerButton}</ButtonWrapper> : ""}
          </RightWrapper>
        </Grid>
        <Grid>
          <Content>
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
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
