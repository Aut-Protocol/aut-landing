import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "common/assets/Pulse_Button.json";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const Loading = ({ title, subtitle }) => {
  return (
    <Tooltip
      placement="topRight"
      overlayClassName="button-tooltip"
      align={{
        offset: [0, 20],
      }}
      overlay={
        <div
          style={{
            width: "160px",
            height: "90px",
          }}
        >
          {title}
          <br />
          {subtitle}
        </div>
      }
    >
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            zIndex: "99",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="27"
          viewBox="0 0 14 27"
        >
          <text
            id="_"
            data-name="+"
            transform="translate(0 20)"
            fontSize="20"
            fontFamily="Avenir-Black, Avenir"
            fontWeight="800"
            letterSpacing="0.016em"
          >
            <tspan x="0" y="0">
              +
            </tspan>
          </text>
        </svg>

        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            zIndex: 1,
          }}
        >
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>
    </Tooltip>
  );
};

function CircleImage({ pulseButtons }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="646.181"
      height="646.237"
      viewBox="0 0 646.181 646.237"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x2="1"
          y1="0.5"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#009fe3"></stop>
          <stop offset="0.08" stopColor="#0399de"></stop>
          <stop offset="0.19" stopColor="#0e8bd3"></stop>
          <stop offset="0.3" stopColor="#2072bf"></stop>
          <stop offset="0.41" stopColor="#3a50a4"></stop>
          <stop offset="0.53" stopColor="#5a2583"></stop>
          <stop offset="0.71" stopColor="#453f94"></stop>
          <stop offset="0.88" stopColor="#38519f"></stop>
          <stop offset="1" stopColor="#3458a4"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x2="1"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x2="1"
          y1="0.5"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#0059a6"></stop>
          <stop offset="0.1" stopColor="#0556a1"></stop>
          <stop offset="0.22" stopColor="#134f93"></stop>
          <stop offset="0.35" stopColor="#2c427d"></stop>
          <stop offset="0.49" stopColor="#4e315e"></stop>
          <stop offset="0.53" stopColor="#5a2c54"></stop>
          <stop offset="0.67" stopColor="#353e75"></stop>
          <stop offset="0.8" stopColor="#184c90"></stop>
          <stop offset="0.92" stopColor="#0655a0"></stop>
          <stop offset="1" stopColor="#0059a6"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x2="1"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="0"
          xlinkHref="#linear-gradient-3"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x2="1"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="0"
          xlinkHref="#linear-gradient-3"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="0"
          xlinkHref="#linear-gradient-3"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x2="1"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x2="1"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="0"
          xlinkHref="#linear-gradient-3"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x2="1.001"
          y1="0.5"
          y2="0.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x2="1.001"
          y1="0.499"
          y2="0.499"
          xlinkHref="#linear-gradient"
        ></linearGradient>
      </defs>

      <g data-name="Group 5" transform="matrix(.998 -.07 .07 .998 0 42.232)">
        <path
          fill="url(#linear-gradient)"
          d="M302.71 605.48C135.8 605.48 0 469.679 0 302.71S135.8 0 302.71 0s302.71 135.8 302.71 302.71-135.8 302.71-302.71 302.71zm0-599.463C139.111 6.017 6.017 139.111 6.017 302.71S139.111 599.4 302.71 599.4 599.4 466.309 599.4 302.71 466.37 6.017 302.71 6.017z"
          data-name="Path 12"
        ></path>
        <path
          fill="url(#linear-gradient-2)"
          d="M291.372 580.494C131.984 580.494 2.26 450.829 2.26 291.382S131.984 2.27 291.372 2.27s289.112 129.724 289.112 289.112-129.665 289.112-289.112 289.112zm0-572.207C135.294 8.287 8.337 135.3 8.337 291.382s127.017 283.095 283.095 283.095S574.527 447.46 574.527 291.382 447.51 8.287 291.372 8.287z"
          data-name="Path 13"
          transform="translate(11.338 11.388)"
        ></path>
        <path
          fill="url(#linear-gradient-3)"
          d="M263.177 518.484c-140.8 0-255.3-114.5-255.3-255.3S122.442 7.89 263.177 7.89s255.3 114.562 255.3 255.3-114.505 255.294-255.3 255.294zm0-504.577c-137.426 0-249.28 111.854-249.28 249.28s111.854 249.28 249.28 249.28 249.28-111.854 249.28-249.28-111.794-249.28-249.28-249.28z"
          data-name="Path 14"
          transform="translate(39.533 39.583)"
        ></path>
        <path
          fill="url(#linear-gradient-4)"
          d="M231.771 449.412c-119.977 0-217.631-97.654-217.631-217.631S111.794 14.15 231.771 14.15 449.4 111.8 449.4 231.781s-97.652 217.631-217.629 217.631zm0-429.245c-116.668 0-211.614 94.947-211.614 211.614S115.1 443.4 231.771 443.4s211.614-94.947 211.614-211.614S348.5 20.167 231.771 20.167z"
          data-name="Path 15"
          transform="translate(70.939 70.989)"
        ></path>
        <path
          fill="url(#linear-gradient-5)"
          d="M205.182 390.933c-102.408 0-185.742-83.333-185.742-185.741S102.774 19.45 205.182 19.45s185.741 83.334 185.741 185.742-83.334 185.741-185.741 185.741zm0-365.466c-99.1 0-179.725 80.626-179.725 179.725s80.626 179.725 179.725 179.725 179.724-80.627 179.724-179.725S304.28 25.467 205.182 25.467z"
          data-name="Path 16"
          transform="translate(97.528 97.579)"
        ></path>
        <path
          fill="url(#linear-gradient-6)"
          d="M181.8 339.516c-86.944 0-157.7-70.759-157.7-157.7S94.859 24.11 181.8 24.11s157.7 70.759 157.7 157.7-70.753 157.706-157.7 157.706zm0-309.449c-83.635 0-151.686 68.051-151.686 151.686S98.168 333.439 181.8 333.439s151.686-68.051 151.686-151.686S265.438 30.067 181.8 30.067z"
          data-name="Path 17"
          transform="translate(120.907 120.957)"
        ></path>
        <path
          fill="url(#linear-gradient-7)"
          d="M130.279 226.2a95.909 95.909 0 1195.909-95.909 96.013 96.013 0 01-95.909 95.909zm0-185.862a89.892 89.892 0 1089.892 89.892 89.978 89.978 0 00-89.892-89.893z"
          data-name="Path 18"
          transform="translate(172.431 172.481)"
        ></path>
        <path
          fill="url(#linear-gradient-8)"
          d="M162.638 297.427c-74.309 0-134.718-60.47-134.718-134.718S88.39 27.93 162.638 27.93 297.417 88.4 297.417 162.708s-60.47 134.718-134.778 134.718zm0-263.48c-71 0-128.7 57.762-128.7 128.762a128.843 128.843 0 00128.7 128.7c70.939 0 128.762-57.762 128.762-128.7S233.638 33.947 162.638 33.947z"
          data-name="Path 19"
          transform="translate(140.072 140.122)"
        ></path>
        <path
          fill="url(#linear-gradient-9)"
          d="M145.782 260.353a114.617 114.617 0 01-114.5-114.5c0-63.117 51.384-114.562 114.5-114.562a114.532 114.532 0 010 229.063zm0-223.046a108.515 108.515 0 10108.484 108.545c0-59.808-48.677-108.545-108.485-108.545z"
          data-name="Path 20"
          transform="translate(156.928 156.979)"
        ></path>
        <path
          fill="url(#linear-gradient-10)"
          d="M117.737 198.664A80.867 80.867 0 11198.6 117.8a80.965 80.965 0 01-80.863 80.864zm0-155.717a74.85 74.85 0 1074.85 74.85 74.931 74.931 0 00-74.85-74.85z"
          data-name="Path 21"
          transform="translate(184.973 185.274)"
        ></path>
        <path
          fill="url(#linear-gradient-11)"
          d="M107.452 176a68.532 68.532 0 1168.532-68.532A68.614 68.614 0 01107.452 176zm0-131.108a62.516 62.516 0 1062.516 62.516A62.579 62.579 0 00107.452 44.9z"
          data-name="Path 22"
          transform="translate(195.258 195.358)"
        ></path>
        <path
          fill="url(#linear-gradient-12)"
          d="M97.669 154.539a56.83 56.83 0 1156.8-56.8 56.866 56.866 0 01-56.8 56.8zm0-107.642a50.813 50.813 0 1050.783 50.843A50.844 50.844 0 0097.669 46.9z"
          data-name="Path 23"
          transform="translate(205.04 205.091)"
        ></path>
        <path
          fill="url(#linear-gradient-3)"
          d="M89.743 137.046a47.293 47.293 0 1147.293-47.293 47.377 47.377 0 01-47.293 47.293zm0-88.569a41.276 41.276 0 1041.276 41.276 41.343 41.343 0 00-41.276-41.276z"
          data-name="Path 24"
          transform="translate(212.967 213.017)"
        ></path>
        <path
          fill="url(#linear-gradient-14)"
          d="M82.97 122.15a39.17 39.17 0 1139.17-39.17 39.211 39.211 0 01-39.17 39.17zm0-72.383a33.153 33.153 0 1033.153 33.153A33.177 33.177 0 0082.97 49.767z"
          data-name="Path 25"
          transform="translate(219.74 219.79)"
        ></path>
      </g>

      {pulseButtons.map(({ title, subtitle, ...position }, index) => (
        <foreignObject key={`circle-foreign-object-key${index}`} id="pulse_button" width="100" height="100" {...position}>
          <Loading title={title} subtitle={subtitle} />
        </foreignObject>
      ))}
    </svg>
  );
}

export default CircleImage;
