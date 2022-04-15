import React from "react";
import { ReactComponent as Logo } from "../../assets/mbb_logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <div className={styles["items-container"]}>
        <div>
          <a className={styles["item1"]}>Why Use My BillBook?</a>
          <div className={styles["line"]}></div>
        </div>

        <a className={styles["item"]}>Who Is It For?</a>
        <a className={styles["item"]}>Online Store</a>
        <a className={styles["item"]}>Pricing</a>
        <a className={styles["item"]}>FAQS</a>
      </div>
    </div>
  );
};

export default NavBar;
