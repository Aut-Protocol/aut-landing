import Container from "common/components/Container";
import Section, {
  ImagePreview,
  Content,
  Grid,
  RightWrapper,
  ButtonWrapper,
  StyledTypography,
} from "./sectionTop.style";
import Typography from "common/components/Typography";
import Button from "common/components/Button";

const SectionTop = ({
  image,
  title,
  subtitle,
  headerButton,
  link,
  className,
}) => {
  return (
    <Section id="section_top" className={className}>
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Grid>
          <Content>
            <Typography m="0" color="white" as="h1">
              {title}
            </Typography>
            <StyledTypography
              mb="0"
              color="white"
              fontWeight="normal"
              fontSize={{
                _: "16px",
                xs: "16px",
                sm: "16px",
                md: "16px",
                lg: "18px",
                xxl: "24px",
              }}
              letterSpacing="0.0025em"
              fontFamily="var(--fractul-regular)"             
            >
              {subtitle}
            </StyledTypography>

            {link ? (
              <ButtonWrapper>
                <Button
                  title={link?.title}
                  href={link?.path}
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
            ) : (
              ""
            )}
          </Content>
          <RightWrapper>
            <ImagePreview>{image}</ImagePreview>
            {headerButton ? <ButtonWrapper>{headerButton}</ButtonWrapper> : ""}
          </RightWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default SectionTop;
