import { useScroll } from "framer-motion";
import AutFeaturesBg from "common/assets/image/features-bg.png";
import FreedomIcon from "common/assets/image/freedom-icon.svg";
import SelfIcon from "common/assets/image/self-icon.svg";
import AutonomyIcon from "common/assets/image/autonomy-icon.svg";
import GovernanceIcon from "common/assets/image/governance-icon.svg";
import PermissionlessIcon from "common/assets/image/permissionless-icon.svg";
import SustainabilityIcon from "common/assets/image/sustainability-icon.svg";
import Box from "common/components/Box";
import Image from "common/components/Image";
import Typography from "common/components/Typography";
import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { Fragment, memo } from "react";

const FeaturesContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;

  ${themeGet("mediaQueries.sm")} {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }

  ${themeGet("mediaQueries.md")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 50px;
  }
`;

const AutFeaturesData = [
  {
    icon: FreedomIcon,
    title: "Personal freedom",
    description: "Empower individual Āutonomy and liberty within Āut.",
  },
  {
    icon: SelfIcon,
    title: "Āut means “Self”",
    description: "Embrace self-governance and self‑identity at the core.",
  },
  {
    icon: AutonomyIcon,
    title: "Collective Āutonomy",
    description: "Forge a united path to āutonomous decision-making.",
  },
  {
    icon: GovernanceIcon,
    title: "Merit Governance",
    description: "Reward expertise and dedication with role-based governance.",
  },
  {
    icon: PermissionlessIcon,
    title: "Permissionless",
    description: "Join freely, no barriers to access or participate.",
  },
  {
    icon: SustainabilityIcon,
    title: "Self-sustainability",
    description: "Ensure the enduring strength and independence of Āut.",
  },
];

interface IndividualFeatureProps {
  icon: any;
  title: string;
  description: string;
}

const IndividualFeature = ({ icon, title, description }: IndividualFeatureProps) => {
  return (
    <div
      style={{
        maxWidth: "288px",
      }}
    >
      <Box>
        <Image
          height={{
            _: "48px",
            xs: "72px",
          }}
          style={{
            marginBottom: "16px",
          }}
          width="100%"
          src={icon.src}
          alt="New_logo"
        />
        <Typography color="white" fontSize="24px" textAlign="center">
          {title}
        </Typography>
        <Typography as="body" fontSize="16px" textAlign="center">
          {description}
        </Typography>
      </Box>
    </div>
  );
};

const AutFeatures = ({ parentRef }: any) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <Box
        className="absolute flex origin-center justify-center text-white"
        style={{
          // transform: "translate(-50%, -50%)",
          backgroundImage: `url(${AutFeaturesBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // left: "50%",
          // top: "50%",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FeaturesContainer>
          {AutFeaturesData.map(({ icon, title, description }, index) => (
            <Fragment key={title}>
              <IndividualFeature
                icon={icon}
                title={title}
                description={description}
              ></IndividualFeature>
            </Fragment>
          ))}
        </FeaturesContainer>
      </Box>
    </>
  );
};

export default memo(AutFeatures);
