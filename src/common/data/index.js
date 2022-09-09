import AutLogo from "common/assets/image/aut-logo.svg";

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */

export const NavbarData = {
  logo: AutLogo,
  menuItems: [
    {
      label: "Products",
      staticLink: true,
      path: "/products",
    },
    {
      label: "Manifesto",
      staticLink: true,
      path: "/manifesto",
    },
    {
      label: "Roadmap",
      staticLink: true,
      path: "/roadmap",
    },
    {
      label: "Ask Aut",
      staticLink: true,
      path: "/qa",
    },
  ],
};

/* ------------------------------------ */
// OptOut data section
/* ------------------------------------ */
import animationData from "common/assets/portal.json";
import expanderImage from "common/assets/image/expander.svg";
import videoPlaceholderImage from "common/assets/image/placeholder-video.svg";

export const OptOutData = {
  title: (
    <>
      OPT <br /> ĀUT
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  pulseButtons: [
    {
      title: "Āut Expander",
      subtitle: "Lorem ipsum",
      x: "190",
      y: "35",
    },
    {
      title: "dĀut",
      subtitle: "Lorem ipsum",
      x: "525",
      y: "240",
    },
    {
      title: "Āut ID",
      subtitle: "Lorem ipsum",
      x: "120",
      y: "290",
    },
    {
      title: "Dashboard",
      subtitle: "Lorem ipsum",
      x: "320",
      y: "520",
    },
  ],
  portal: {
    title: "…Time to Opt Āut",
    animationData,
  },
  expander: {
    title: (
      <>
        Expand <br /> Your <br /> DAO <br /> Today
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    image: expanderImage,
    link: {
      title: "Link to Expander Page",
      path: "/",
    },
  },
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
};

/* ------------------------------------ */
// Roadmap data section
/* ------------------------------------ */

export const RoadmapData = {
  title: (
    <>
      Āut <br /> Map
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
  items: [
    {
      title: "Q1- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q2- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q3- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
    {
      title: "Q4- Lorem ipsum dolor sit amet, consetetur",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore ",
    },
  ],
};

/* ------------------------------------ */
// Manifesto data section
/* ------------------------------------ */
import dividerImage from "common/assets/image/aut-line.svg";

export const ManifestoData = {
  title: <>Āut Manifesto</>,
  subtitle: (
    <>
      Lorem ipsum dolor sit amet, consetetur <br /> sadipscing elitr, sed diam
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
  chapter: {
    divider: dividerImage,
    list: [
      {
        title: "Chapter One",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        title: "Chapter Two",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        title: "Chapter Three",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
    ],
  },
};

/* ------------------------------------ */
// Products data section
/* ------------------------------------ */

import DaoExpanderIcon from "common/assets/image/expander-icon.svg";
import dAutIcon from "common/assets/image/daut-icon.svg";
import DashboardIcon from "common/assets/image/dashboard-icon.svg";
import AutIDIcon from "common/assets/image/autid-icon.svg";
import FeatureIcon from "common/assets/image/feature-icon.svg";
import Button from "common/components/Button";

export const ProductsData = {
  title: (
    <>
      Āut <br /> Us
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
  dAut: {
    title: <>dĀut</>,
    className: "no-uppercase",
    headerButton: <Button className="gradient" title="Button Text Here" />,
    subtitle: (
      <>
        Lorem ipsum dolor <br /> sit amet, consetetur sadipscing elitr, <br />
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam
      </>
    ),
    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    subtitle3: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
  autId: {
    title: (
      <>
        Āut
        <br />
        ID
      </>
    ),
    features: [
      {
        id: 1,

        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 2,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 3,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    featureHeader: <>Key features</>,
    featureSubtitle: (
      <>
        Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed
      </>
    ),

    subtitle: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et
      </>
    ),

    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor
      </>
    ),

    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
  daoExpander: {
    title: (
      <>
        Expand <br />
        Your <br />
        DAO <br />
        Today
      </>
    ),
    variant: "h2",

    subtitle: (
      <>
        Āut is an expandable Community protocol, powering the next level of
        collective coordination.
      </>
    ),
    subtitle2: (
      <>
        By integrating it, you can expand your DAO contract - adding the
        concepts of Members Roles & Interactions directly on-chain. <br />{" "}
        <br />
        Assign Roles to your Community - and kick off role-based working
        routines and role-weighted governance in seconds. <br /> <br />
        There is no community like yours - create your own Standards. Opt Āut.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },

    features: [
      {
        id: 1,

        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 2,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        id: 3,
        icon: FeatureIcon,
        title: "Feature",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    featureHeader: <>Key features</>,
    featureSubtitle: (
      <>
        Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed
      </>
    ),
  },
  dashboard: {
    title: (
      <>
        Das <br />
        hbo <br />
        ard
      </>
    ),
    subtitle: (
      <>
        Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr,
        sed
      </>
    ),
    subtitle2: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    subtitle3: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
        <bt />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </>
    ),
    video: {
      url: "https://www.youtube.com/embed/hW98BFnVCm8",
      image: videoPlaceholderImage,
    },
  },
};

export const ProductList = [
  {
    id: 1,
    isActive: true,
    icon: DaoExpanderIcon,
    title: "Āut Expander",
    link: "/products/dao-expander",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat",
  },
  {
    id: 2,
    isActive: true,
    icon: dAutIcon,
    title: "dĀut",
    link: "/products/d-aut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat",
  },
  {
    id: 3,
    isActive: true,
    icon: AutIDIcon,
    title: "Āut ID",
    link: "/products/aut-id",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 4,
    isActive: true,
    icon: DashboardIcon,
    title: "Āut Dashboard",
    link: "/products/aut-dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 5,
    icon: DashboardIcon,
    isActive: false,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat",
  },
  {
    id: 5,
    icon: DashboardIcon,
    isActive: false,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat ",
  },
];

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
// QA data section
/* ------------------------------------ */

export const QAData = {
  title: (
    <>
      ASK <br /> ĀUT
    </>
  ),
  subtitle: (
    <>
      Lorem ipsum dolor <br /> sit amet, consetetur <br /> sadipscing elitr, sed
    </>
  ),
  faqs: [
    {
      id: 1,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 2,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 3,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 4,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
    {
      id: 5,
      title: "Question - Lorem ipsum dolor sit amet, consetetur?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore `,
    },
  ],
  video: {
    title: "Lorem ipsum dolor sit amet, consetetur",
    subtitle: "Lorem ipsum dolor sit amet",
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: videoPlaceholderImage,
  },
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerDiscord from "common/assets/image/discord-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerDocs from "common/assets/image/docs.svg";

export const FooterData = {
  menu: [],
  logo: AutLogo,
  mailchimpUrl:
    "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0",
  copyright: `Copyright © ${new Date().getFullYear()}, Aut.`,
  widgets: [
    {
      id: 2,
      title: "Quick Links",
      list: [
        {
          id: 1,
          title: "About Aut",
          link: "/about",
        },
        {
          id: 2,
          title: "Manifesto",
          link: "/manifesto",
        },
        {
          id: 4,
          title: "Ask Āut",
          link: "/qa",
        },
        {
          id: 5,
          title: "RoadMap",
          link: "/roadmap",
        },
      ],
    },
    {
      id: 3,
      title: "Āut Products",
      list: [
        {
          id: 1,
          title: "Āut Expander",
          link: "/products/dao-expander",
        },
        {
          id: 2,
          title: "dĀut",
          link: "/products/d-aut",
        },
        {
          id: 3,
          title: "Āut ID",
          link: "/products/aut-id",
        },
        {
          id: 4,
          title: "Dashboard",
          link: "/products/aut-dashboard",
        },
      ],
    },
  ],
  social: [
    {
      link: "https://docs.aut.id",
      icon: footerDocs,
      name: "Docs",
    },
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
      name: "Twitter",
    },
    {
      link: "http://discord.gg/aXJFGgcvUk",
      icon: footerDiscord,
      name: "Discord",
    },
    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
