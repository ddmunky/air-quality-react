import React from "react"

const Loading = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", background: "none" }}
    width="34"
    height="34"
    display="block"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
  >
    <circle cx="84" cy="50" r="1.107" fill="#f05125">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="0.352112676056338s"
        keySplines="0 0.5 0.5 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="10;0"
      ></animate>
      <animate
        attributeName="fill"
        begin="0s"
        calcMode="discrete"
        dur="1.408450704225352s"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="#f05125;#32a0da;#7fbb42;#fdb813;#f05125"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="8.892" fill="#f05125">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
      ></animate>
      <animate
        attributeName="cx"
        begin="0s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="46.234" cy="50" r="10" fill="#fdb813">
      <animate
        attributeName="r"
        begin="-0.352112676056338s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
      ></animate>
      <animate
        attributeName="cx"
        begin="-0.352112676056338s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="80.234" cy="50" r="10" fill="#7fbb42">
      <animate
        attributeName="r"
        begin="-0.704225352112676s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
      ></animate>
      <animate
        attributeName="cx"
        begin="-0.704225352112676s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="0" fill="#32a0da">
      <animate
        attributeName="r"
        begin="-1.056338028169014s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
      ></animate>
      <animate
        attributeName="cx"
        begin="-1.056338028169014s"
        calcMode="spline"
        dur="1.408450704225352s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
  </svg>
)

export default Loading
