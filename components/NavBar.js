// components/NavBar.js

import styles from "../styles/NavBar.module.scss";
import NavButton from "./NavButton";

const NavBar = props => (
  <div className={styles.NavBar}>
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;