/* ------------------------------------ */
// ComingSoon data section
/* ------------------------------------ */
import AutLogo from "common/assets/image/aut-logo.svg";

export const ComingSoonData = {
  logo: AutLogo,
  title: "create your own standard.",
};

/* ------------------------------------ */
// Pillars data section
/* ------------------------------------ */
import Pillars from "common/assets/image/pillars.svg";
import PillarsMobile from "common/assets/image/pillars-mobile.svg";

export const PillarsData = {
  mobileImage: PillarsMobile,
  desktopImage: Pillars,
  title: "Do more with your DAO.",
  descriptions: [
    "Āut is an expandable Protocol for Role-based Membership in Web3 Communities.",
    "Create a DAO 2.0, add the native concept of Role at contract level - and join the coordination Renaissance.",
  ],
  link: {
    src: "https://integrate.aut.id",
    label: "Āut Expander Playground >",
  },
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerDocs from "common/assets/image/docs.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, Aut.`,
  social: [
    {
      link: "https://docs.aut.id",
      icon: footerDocs,
    },
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
    },
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
