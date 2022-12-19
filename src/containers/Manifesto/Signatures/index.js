import Container from "common/components/Container";
import Section, { ListItem } from "./signatures.style";
import Button from "common/components/Button";
import Box from "common/components/Box";
import { useEffect } from "react";
import { useState } from "react";
import { getAllSignees } from "api/index.api";
import { trimAddress } from "common/utils/misc";
import dateFormat from "dateformat";
import { openModal } from "@redq/reuse-modal";
import VerifySignature from "./VerifySignature";
import Typography from "common/components/Typography";
import Text from "common/components/Text";
import Link from "common/components/Link";
const message = "I should own this tweet %40aut-labs %23digitalroots";

const ManifestoSignatures = () => {
  const [signees, setSignees] = useState([]);

  const openPopup = () => {
    openModal({
      config: {
        className: "customModal",
        style: {
          border: 0,
        },
        disableDragging: true,
        width: 480,
        height: 440,
        animationFrom: { transform: "scale(0.2)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "scale(1)" }, //  react-spring <Spring to={}> props value
      },
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      component: VerifySignature,
      componentProps: {
        message,
        onClose: () => {
          getAllSignees().then(setSignees);
        },
      },
    });
  };

  useEffect(() => {
    getAllSignees().then(setSignees);
  }, []);

  return (
    <Section id="manifesto_signatures">
      <Container width="50%">
        <Button
          onClick={openPopup}
          className="gradient"
          title="Sign and Opt Āut"
        />

        <Box className="list-wrapper">
          <Typography as="h1">Sub-Title about Signatures</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Typography>
          {signees.map(({ address, timestamp }, index) => (
            <ListItem key={`list-item-${index}`}>
              <Link href={address} className="ListItem">
                {trimAddress(address)}
              </Link>
              <Text
                content={dateFormat(
                  new Date(Number(timestamp) * 1000),
                  "dd/mm/yyyy | HH:MM:ss"
                )}
              />
            </ListItem>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default ManifestoSignatures;
