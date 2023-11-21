import Container from "common/components/Container";
import Section from "./newLanding.style";
import Typography from "common/components/Typography";
import Box from "common/components/Box";
import Image from "common/components/Image";
import NewLogo from "common/assets/image/new_logo.svg";
import Button from "common/components/Button";
import { PopupButton } from "@typeform/embed-react";
import Link from "common/components/Link";
import { NavbarData } from "common/data";
const formId = "yfd7X6z1";

const NewLanding = () => {
  return (
    <Section id="new_landing">
      <Container
        pt={{
          _: "122px",
          xs: "122px",
          sm: "84px",
          md: "84px",
          xxl: "112px",
        }}
      >
        <Box
          style={{
            position: "fixed",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              height={{
                _: "56px",
                xs: "80px",
                sm: "80px",
                md: "80px",
                xxl: "120px",
              }}
              width="100%"
              src={NewLogo.src}
              alt="New_logo"
            />
          </Box>
          <Typography color="white" fontWeight="400" as="subtitle2" textAlign="center">
            The Operating System of yourself
          </Typography>
          <Typography my="8" color="white" as="subtitle1" textAlign="center">
            ĀutOS is the social map of your Web3 reputation. <br />A Web of
            Trust - where you get in, by opting out.
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            mb="12"
          >
            <PopupButton id={formId} as="span">
              <Button
                type="submit"
                title="Interact"
                variant="roundOutlined"
                className="gradient"
                fontWeight="bold"
                size="normal"
                colors="primary"
              />
            </PopupButton>
          </Box>
          <Box
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              bottom: "90px",
              width: "100%",
            }}
          >
            <Box
              style={{
                display: "inline-flex",
                height: "48px",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                flexShrink: 0,
                borderRadius: "6px",
                border: "1.5px solid #2F3746",
                background: "rgba(0, 0, 0, 0.64)",
                boxShadow:
                  "0px 16px 80px 0px #256BB0, 0px 0px 16px 0px rgba(37, 107, 176, 1), 0px 0px 16px 0px rgba(37, 107, 176, 1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                  }}
                >
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      color: "#F0F5FF",
                      fontFize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineLeight: "125%",
                    }}
                  >
                    Āut{" "}
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#F0F5FF",
                      fontWeight: 400,
                      lineLeight: "125%",
                    }}
                  >
                    /ˈa͡ʊt/
                  </Typography>{" "}
                  <Typography
                    m="0"
                    style={{
                      fontVariantNumeric: "lining-nums proportional-nums",
                      fontFize: "16px",
                      fontStyle: "normal",
                      color: "#818CA2",
                      fontWeight: 400,
                      lineLeight: "125%",
                    }}
                  >
                    • noun •
                  </Typography>{" "}
                </div>
                <Typography
                  m="0"
                  style={{
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontFize: "16px",
                    fontStyle: "normal",
                    color: "#F0F5FF",
                    fontWeight: 400,
                    lineLeight: "125%",
                  }}
                >
                  “Self” [greek] as in Self-Sovereign, or Self-governance
                </Typography>
              </div>
            </Box>
          </Box>

          <Box
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              bottom: "10px",
              width: "100%",
            }}
          >
            <Box
              style={{
                display: "inline-flex",
                height: "48px",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                position: "relative",
              }}
            >
              <div
                className="bottom-nav-new"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography color="white" as="body" textAlign="center">
                  Made with &#128293; by Āut Lab
                </Typography>

                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gridGap: "8px",
                  }}
                  className="main_menu_bottom"
                >
                  {NavbarData.menuItems.map((menu, index) => (
                    <li key={`menu-item-${index}`}>
                      <Link
                        legacyBehavior
                        href={menu.path}
                        target={menu.target}
                      >
                        <Button
                          target={menu.target}
                          href={menu.path}
                          variant="navLink"
                          colors="nav"
                          title={menu.label}
                          fontSize={{
                            _: "14px",
                            xs: "16px",
                            sm: "16px",
                            md: "16px",
                            xxl: "20px",
                          }}
                          ml={{
                            md: "44px",
                            lg: "50px",
                            xxl: "60px",
                          }}
                          as="a"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default NewLanding;
