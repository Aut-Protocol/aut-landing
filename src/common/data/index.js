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
    src: "https://playground.aut.id",
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
  logo: AutLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, Aut.`,
  widgets: [
    {
      id: 2,
      title: 'Quick Links',
      list: [
        {
          id: 1,
          title: 'About Aut',
          link: '/about',
        },
        {
          id: 2,
          title: 'Manifesto',
          link: '/manifesto',
        },
        {
          id: 4,
          title: 'Ask Āut',
          link: '/qa',
        },
        {
          id: 5,
          title: 'RoadMap',
          link: '/roadmap',
        },
      ],
    },
    {
      id: 3,
      title: 'Āut Products',
      list: [
        {
          id: 1,
          title: 'Āut Exspander',
          link: '/products/dao-expander',
        },
        {
          id: 2,
          title: 'dĀut',
          link: '/products/d-aut',
        },
        {
          id: 3,
          title: 'Āut ID',
          link: '/products/aut-id',
        },
        {
          id: 4,
          title: 'Dashboard',
          link: '/products/dashboard',
        },
      ],
    }
  ],
  social: [
    {
      link: "https://docs.aut.id",
      icon: footerDocs,
      name: 'Docs'
    },
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
      name: 'Twitter'
    },
    {
      link: "http://discord.gg/aXJFGgcvUk",
      icon: footerDiscord,
      name: 'Discord'
    },
    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
