import React from "react";
import Container from "common/components/Container";
import SectionWrapper, {
  ButtonWrapper,
  Content,
  Grid,
  ImagePreview,
  LeftWrapper,
} from "./expanderSection.style";
import { OptOutData } from "common/data";
import Button from "common/components/Button";
import Typography from "common/components/Typography";
import Footer from "containers/Footer";
import NextImage from "common/components/NextImage";

const ExpanderSection = () => {
  const { image, title, description, link } = OptOutData.expander;
  return (
    <SectionWrapper id="expander" className="snap">
      <Container
        pt={{
          _: "50px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Grid>
          <LeftWrapper>
            <ImagePreview>
              <NextImage src={image} alt="Expander Image" />
            </ImagePreview>
          </LeftWrapper>

          <Content>
            <Typography mb="10px" mt="0" color="white" as="h2">
              {title}
            </Typography>

            <Typography m="0" color="white" as="subtitle2" fontWeight="normal">
              {description}
            </Typography>

            <ButtonWrapper>
              <Button
                title={link.title}
                href={link.path}
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
          </Content>
        </Grid>
        <Footer />
      </Container>
    </SectionWrapper>
  );
};

export default ExpanderSection;
