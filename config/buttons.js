import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkerAlt,
  faUser,
  faFilm,
  faMobileAlt,
  faShoppingCart
 } from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    label: "Shows",
    path: "/Shows",
    icon: <FontAwesomeIcon icon={faFilm} />
  },
  {
    label: "App",
    path: "/App",
    icon: <FontAwesomeIcon icon={faMobileAlt} />
  },
  {
    label: "Login",
    path: "/Login",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;
