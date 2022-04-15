import React from "react";
import whtsapp from "../../assets/icn_whatsapp.svg";
import chat from "../../assets/icn_chat.svg";
import yt from "../../assets/icn_youtube.svg";
import fa from "../../assets/icn_Facebook.svg";
import lin from "../../assets/icn_linkedin.svg";
import ins from "../../assets/icn_instagram.svg";
import tw from "../../assets/icn_Twitter.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["fsection"]}>
          <h3>Get in touch</h3>
          <p>help@flobiz.com</p>
          <h3 style={{ marginBottom: "2vh", color: "darkslategray" }}>
            +91 7400417400
          </h3>
          <div className={styles["socialContainer1"]}>
            <div className={styles["iconWtext"]}>
              <div className={styles["iconWtext1"]}>
                <img src={whtsapp} />
                <p>WhatsApp us</p>
              </div>
            </div>
            <div className={styles["iconWtext"]}>
              <div className={styles["iconWtext2"]}>
                <img src={chat} />
                <p>Chat with us</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["fsection"]}>
          <h3>Information</h3>
          <div className={styles["footerMenu"]}>
            <div className={styles["footerMenu1"]}>
              <p>Refund Policy</p>
              <p style={{ color: "#FF8C00" }}>Privacy Policy</p>
              <p>Terms and Conditons</p>
            </div>
          </div>
        </div>

        <div className={styles["fsection"]}>
          <div style={{ marginTop: "4vh" }} className={styles["footerMenu"]}>
            <div className={styles["footerMenu1"]}>
              <p>FAQ's</p>
              <p>Pricing</p>
              <p>FloBiz Business Group</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>

        <div className={styles["fsection"]}>
          <h3>Follow us</h3>
          <div className={styles["logo"]}>
            <img src={yt} />
            <img src={tw} />
            <img src={fa} />
            <img src={ins} />
            <img src={lin} />
          </div>
          <p>
            FloBooks is product by <a href="#">FloBiz</a>
          </p>
        </div>
      </div>
    </>
  );
}
