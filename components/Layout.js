/* home work
  <Head>
        <title>E.A BiggestLoosers</title>
      </Head>

      <Header appTitle={appTitle} />
      <NavBar navButtons={navButtons} />
     
      */
import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import styles from "../styles/Layout.module.scss";



import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `>eabl<`;

  return (
    <div className={styles.Layout}>
   
      <div className={styles.Content}>{props.children}</div>
      <Footer footer={props.children} />
    </div>
  );
};

export default Layout;