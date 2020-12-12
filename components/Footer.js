// components/Footer.js
import Link from "next/link";


import styles from "../styles/Footer.module.scss";

const Footer = props => (
  <Link href="/">
    <div className={styles.Footer}>copyright @ Villagerant</div>
  </Link>
);

export default Footer;