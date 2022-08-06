
/* ------------------------------------ */
// ComingSoon data section
/* ------------------------------------ */
import AutLogo from "common/assets/image/aut-logo.svg";

export const ComingSoonData = {
  logo: AutLogo,
  title: 'create your own standard.'
}



/* ------------------------------------ */
// Pillars data section
/* ------------------------------------ */
import Pillars from "common/assets/image/pillars.svg";

export const PillarsData = {
  image: Pillars,
  title: 'Lorem ipsum dolor sit amet, consetetur',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
  link: {
    src: '',
    label: 'Playground link here >'
  }
}

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
