import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
 } from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Home",
    path: "/Home",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Shows",
    path: "/Shows",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "App",
    path: "/App",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Login",
    path: "/Login",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;