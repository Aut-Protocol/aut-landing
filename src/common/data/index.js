import AutLogo from "common/assets/image/aut-logo.svg";

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */

export const NavbarData = {
  logo: AutLogo,
  navButtons: [
    {
      link: "https://playground.aut.id",
      name: "Playground",
    },
  ],
  menuItems: [
    {
      label: "About",
      staticLink: true,
      path: "/about",
    },
    {
      label: "Products",
      staticLink: true,
      path: "/products",
    },
    {
      label: "Docs",
      staticLink: true,
      target: "_blank",
      path: "https://docs.aut.id/",
    },
    // {
    //   label: "Manifesto",
    //   staticLink: true,
    //   path: "/manifesto",
    // },
    // {
    //   label: "Roadmap",
    //   staticLink: true,
    //   path: "/roadmap",
    // },
    // {
    //   label: "Ask Aut",
    //   staticLink: true,
    //   path: "/qa",
    // },
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
      Do more <br /> With <br /> Your DAO
    </>
  ),
  subtitle: (
    <>
      Āut is a suite of DAO-native Tools <br />
      that unlock the true potential <br />
      of decentralized communities.
    </>
  ),
  pulseButtons: [
    {
      title: "Āut Expander",
      subtitle: (
        <>
          Expand your DAO. Add Members Roles, <br /> Interactions & Commitments
          at a contract-
          <br />
          level - and join the Coordination <br /> Renaissance ⚖️
        </>
      ),
      x: "190",
      y: "35",
      link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    },
    {
      title: "dĀut",
      subtitle: (
        <>
          A DAO-bound. d-Āut is the first <br /> permissionless, decentralized{" "}
          <br /> authentication system specifically designed <br /> for DAOs and
          their Members 🤝
        </>
      ),
      x: "525",
      y: "240",
      link: "https://docs.aut.id/v2/product-suite/daut",
    },
    {
      title: "ĀutID",
      subtitle: (
        <>
          Own your own Identity. ĀutIDs are self
          <br />
          -sovereign, Non-Transferable NFT IDs <br /> that bind each Individual
          to the DAOs <br /> they join. Also, a sexy Social Profile that <br />{" "}
          lives on-chain 😎
        </>
      ),
      x: "120",
      y: "290",
      link: "https://docs.aut.id/v2/product-suite/my-autid",
    },
    {
      title: "Opt Āut - a Manifesto.",
      subtitle: (
        <>
          An open, collective Manifesto to open the <br /> Coordination
          Renaissance 👥 <br /> It lives on-chain, and it’s owned by <b>you</b>.
        </>
      ),
      x: "320",
      y: "520",
      link: "/manifesto",
    },
  ],
  portal: {
    title: "Join the Coordination Renaissance",
    animationData,
  },
  expander: {
    title: (
      <>
        Expand Your <br /> Community.
      </>
    ),
    description: (
      <>
        The Āut Expander is the gateway to expand your community, and use all
        the products in the Āut Suite.
        <br />
        <br />
        Your Community Members’ Identity is much more multidimensional, rich,
        than a flat 0x… address.
        <br />
        <br />
        Expand any DAO’s legacy contract (i.e.: a Moloch DAO), bringing Members’
        Role, Commitment & Interactions directly on-chain, at your Community
        Contract level.
        <br />
        <br />
        Check out our{" "}
        <a
          style={{
            color: "white",
            textDecoration: "underline",
          }}
          target="_blank"
          href="https://docs.aut.id/"
        >
          <b>Docs</b>
        </a>{" "}
        for a complete walkthrough of the Expander.
      </>
    ),
    image: expanderImage,
    link: {
      title: (
        <>
          Go to <b>Playground</b>
        </>
      ),
      path: "https://playground.aut.id/",
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
import VideoPlaceholderForProducts from "common/assets/image/suite.svg";
import AutIDIcon from "common/assets/image/autid-icon.svg";
import FeatureIcon from "common/assets/image/feature-icon.svg";
import Button from "common/components/Button";

export const ProductsData = {
  title: (
    <>
      The Āut <br /> SUITE
    </>
  ),
  subtitle: (
    <>
      All Products in the Āut suite are specifically designed for DAOs - and
      come as a suite of out-of-the-box products for contract-powered
      communities.
    </>
  ),
  video: {
    url: "https://www.youtube.com/embed/hW98BFnVCm8",
    image: VideoPlaceholderForProducts,
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
    link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    description: (
      <>
        <span
          style={{
            marginBottom: "3rem",
          }}
        >
          Your Gateway to the Āut Ecosystem. Import any Legacy DAO Contract,
          from Moloch to Aragon & DAOStack.
        </span>
        Expand it with Āut Expander, and give super-powers to your DAO - adding
        the concepts of Members Roles & Interactions directly on-chain, at
        contract level. Then assign Roles to your Community - and kick off
        role-based working & governance routines.
      </>
    ),
  },
  {
    id: 2,
    isActive: true,
    icon: dAutIcon,
    title: "dĀut",
    link: "https://docs.aut.id/v2/product-suite/daut",
    description: (
      <>
        <span
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "2px",
          }}
        >
          A DAO-Bound
        </span>
        <span>
          A decentralized authentication system designed for DAOs & their
          Members.
        </span>
        <span
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            margin: "2px 0",
          }}
        >
          For DAOs:
        </span>
        <span>
          Integrate it on any website, and let your Members login with their
          Wallet, & claim their Role in your DAO.
        </span>
        <span
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            margin: "2px 0",
          }}
        >
          For Members:
        </span>
        <span>
          Claim your Role in the Community & create your Self-sovereign Account.
          Then use it to login all across Web3.
        </span>
      </>
    ),
  },
  {
    id: 3,
    isActive: true,
    icon: AutIDIcon,
    title: "Āut ID",
    link: "https://docs.aut.id/v2/product-suite/my-autid",
    description: (
      <>
        <span
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "2px",
          }}
        >
          Own your own Identity.
        </span>
        <span
          style={{
            marginBottom: "3rem",
          }}
        >
          ĀutID is self-sovereign, unique, and portable: it lets you join new
          DAOs, and log in across DAO-powered Web3 DApps.
        </span>
        <span>
          It works as a Social Profile, that keeps track of all your DAOs,
          Roles, and Experience. Each holder gets also a unique, public URL with
          this structure: https://my.aut.id/[your-pseudonym] 😎
        </span>
      </>
    ),
  },
  {
    id: 4,
    isActive: false,
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

export const AboutData = {
  title: (
    <>
      AB- <br /> [O/Ā]UT
    </>
  ),
  subtitles: [
    {
      title: "Definition",
      description: (
        <>
          'From Greek, āut means “Self” <br /> As in Self-Sovereign, or
          Self-governance
        </>
      ),
    },
    {
      title: "Values",
      description: (
        <>
          Āut is your own self. In open break with the
          <br /> status quo
        </>
      ),
    },
    {
      title: "Wordplay",
      description: (
        <>
          It also sounds like Out & we like that. <br />
          i.e.: I got in, by getting [o/ā]ut.
        </>
      ),
    },
  ],
  definition: {
    term: "autonomy",
    noun: "noun",
    pronunciation: "au·​ton·​o·​my | \\ ȯ-ˈtä-nə-mē   \\",
    pluralTitle: "plural",
    pluralValue: "autonomies",
    defintionTitle: "Definition of",
    definitions: [
      <>
        : the quality or state of being self-governing <br />
        especially : the right of self-government <br />
        // The territory was granted autonomy.
      </>,
      <>
        : self-directing freedom, especially moral independence <br />
        // personal autonomy.
      </>,
      <>
        : autonomous, from Greek autonomos <br />
        // having its own laws
      </>,
    ],
  },
  bottom: {
    title: "Autonomy & Coordination…",
    subtitle: "…within and beyond the digital borders of a community.",
    description1: (
      <>
        Āut is my own self. My self <br />
        - outside the system
        <br />
        - outside conventions
        <br />
        - outside the status quo.
        <br />
        <br />
        Without Roles, <br />
        there is no coordination. <br />
        Without Coordination, <br />
        there are no DAOs.
        <br />
        <br />
      </>
    ),
    paragraphHeading1: "Do more with your DAO.",
    paragraph1: (
      <>
        Āut is an extendable Protocol designed to
        <br />
        power the next generation of DAOs.
        <br />
        <br />
        DAOs 2.0, if you like, or a Coordination
        <br /> Renaissance. Governance is much more than just voting.
        <br />
        And DAOs can be much more than Smart
        <br /> Treasuries.
      </>
    ),
    description2: (
      <>
        Āut is an expandable Community protocol, powering the
        <br /> next level of collective coordination in DAOs.
        <br /> It does so by adding Role-based Membership &<br />
        Governance in Web3 Communities.
      </>
    ),
    paragraphHeading2: "Create your own Standard.",
    paragraph2: (
      <>
        1. Import any Legacy Contract - any DAO Type you can
        <br /> think of. Here’s a list of what Āut can already expand.
        <br />
        2. Create Roles for your DAO directly on-chain - as easy
        <br /> as on Discord.
        <br /> 3. Use our decentralized authentication system (dĀut)
        <br /> to let your Members login & claim their Role on any
        <br />
        website.
        <br /> 4. Create Tasks & Voting routines,
        <br /> and assign them to a specific
        <br /> Role.
        <br /> 5. Coordinate. Coordinate. Coordinate.
        <br /> 6. Change things. Break things.
        <br /> Let your actions shape your Community.
      </>
    ),
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
  copyright: `© Āut Protocol 2022 ${new Date().getFullYear()}`,
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
          id: 3,
          title: "Github",
          target: "_blank",
          link: "https://github.com/Aut-Protocol",
        },
        {
          id: 2,
          title: "Docs",
          target: "_blank",
          link: "https://docs.aut.id",
        },
        {
          id: 3,
          title: "Product Suite",
          link: "/products",
        },
        // {
        //   id: 2,
        //   title: "Manifesto",
        //   link: "/manifesto",
        // },
        // {
        //   id: 4,
        //   title: "Ask Āut",
        //   link: "/qa",
        // },
        // {
        //   id: 5,
        //   title: "RoadMap",
        //   link: "/roadmap",
        // },
      ],
    },
    // {
    //   id: 3,
    //   title: "Āut Products",
    //   list: [
    //     {
    //       id: 1,
    //       title: "Āut Expander",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/aut-exp.",
    //     },
    //     {
    //       id: 2,
    //       title: "dĀut",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/daut",
    //     },
    //     {
    //       id: 3,
    //       title: "Āut ID",
    //       target:"_blank",
    //       link: "https://docs.aut.id/v2/product-suite/my-autid",
    //     },
    //     // {
    //     //   id: 4,
    //     //   title: "Dashboard",
    //     //   link: "/products/aut-dashboard",
    //     // },
    //   ],
    // },
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
