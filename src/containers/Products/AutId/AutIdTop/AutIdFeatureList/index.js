import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { ProductsData } from "common/data";
import Container from "common/components/UI/Container";

import FeatureListSectionWrapper from "./featureList.style";
import SimpleCard from "common/components/SimpleCard";

const AutIdFeatureListSection = ({
  row,
  col,
  contentStyle,
  blockWrapperStyle,
  featureTitle,
  featureDescription,
}) => {
  const { features, featureHeader, featureSubtitle } = ProductsData.autId;
  return (
    <FeatureListSectionWrapper>
      <Container>
        <Box className="featureWrapper">
          <Text content={featureHeader} className="featureHeader" />
          <Text content={featureSubtitle} className="featureSubtitle" />
        </Box>
        <Box className="row" {...row} style={{ gap: "50px" }}>
          {features.map((feature, index) => (
            <Box
              className="col"
              {...col}
              key={index}
              style={{
                border: "1px solid white",
                maxWidth: "24rem",
                height: "24rem",
              }}
            >
              <SimpleCard
                icon={<img src={feature?.icon?.src} />}
                wrapperStyle={blockWrapperStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
                className="featureList"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureListSectionWrapper>
  );
};

// ProductListSection style props
AutIdFeatureListSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// ProductListSection default style
AutIdFeatureListSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
  },
  // ProductListSection col default style
  col: {
    width: [1, 1, 1 / 2, 1 / 3, 1 / 3],
  },
  // ProductListSection block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"],
  },

  // ProductListSection content default style
  contentStyle: {
    textAlign: "center",
  },
  // ProductListSection title default style
  featureTitle: {
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "10px"],
    letterSpacing: "-0.025em",
    mt: ["10px", "10px", "10px", "10px"],
  },
  // ProductListSection description default style
  featureDescription: {
    lineHeight: "1.6",
    color: "#fff",
  },
};

export default AutIdFeatureListSection;
