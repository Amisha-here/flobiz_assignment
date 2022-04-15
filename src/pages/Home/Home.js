import React from "react";

import { ReactComponent as MadeinLove } from "../../assets/icn_india.svg";
import { ReactComponent as Iso } from "../../assets/icn_ISO.svg";

import NavBar from "../../components/NavBar/NavBar";
import Pricing from "../../components/Pricing/Pricing";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["main-container"]}>
      <NavBar />

      <div className={styles["hero-container"]}>
        <div className={styles["first-container"]}>
          <div className={styles["text-container"]}>
            <h1>
              Simple GST Billing <span>&</span> Stock Management
            </h1>
            <h2>software for your business</h2>
            <h3>Atma Nirbhar Vyapaari bane</h3>
          </div>

          <div className={styles["logo-container"]}>
            <MadeinLove />
            <Iso />
          </div>
        </div>

        <div className={styles["form-container"]}>
          <LoginForm />
        </div>
      </div>
      <div className={styles["line"]}></div>

      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
