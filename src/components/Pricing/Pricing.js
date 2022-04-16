import React from "react";
import styles from "./Pricing.module.css";

import { ReactComponent as CrownIcon } from "../../assets/icn_pricing_crown.svg";
import { ReactComponent as DesktopIcon } from "../../assets/icn_devices.svg";
import { ReactComponent as CheckIcon } from "../../assets/icn_ic_check-fill.svg";
import { ReactComponent as DoubleCheckIcon } from "../../assets/icn_ic_check-double-fill.svg";
import { ReactComponent as MoneyBack } from "../../assets/icn_moneyback.svg";
import { ReactComponent as GoldCrownIcon } from "../../assets/icn_pricing_crown-gold.svg";
import { ReactComponent as DiamondCrownIcon } from "../../assets/icn_pricing_crown-diamnod.svg";
import { ReactComponent as GoldDesktopIcon } from "../../assets/icn_devices-gold.svg";
import { ReactComponent as DiamondDesktopIcon } from "../../assets/icn_devices-diamond.svg";

const Pricing = () => {
  const stats = [
    { header: "1,00,000+", text: "Business Trust us" },
    { header: "30,00,000+", text: "Invoices created" },
    { header: "5,000+", text: "Cities & Towns in India" },
    { header: "4.5 ★", text: "Rating on Google Play" },
  ];

  const silverPlan = [
    "Unlimited Stock Adjustments",
    "GST Reports, Profits & Loss Report",
    "Remove My BillBook logo from Invoice",
    "Only Mobile device supported",
    "+5 more features",
  ];

  return (
    <div>
      <div className={styles["stats"]}>
        {stats.map((i) => {
          return (
            <div className={styles["item"]}>
              <div className={styles["heading"]}>{i.header}</div>
              <div className={styles["text"]}>{i.text}</div>
            </div>
          );
        })}
      </div>

      <div className={styles["free-div"]}>
        <div className={styles["free-text"]}>
          <h2 style={{ fontWeight: 500, marginBottom: 0 }}>
            Now try all benefits of My BillBook app
          </h2>
          <h3 style={{ fontSize: "2em", color: "#FF8C00" }}>
            Free for 14 days
          </h3>
        </div>

        <div className={styles["free-logo"]}>
          <MoneyBack />
        </div>
      </div>
      <div className={styles["priceContainer"]}>
        {/* //Silver plan starts here// */}
        <div className={styles["container"]}>
          <div className={styles["iconWrapper"]}>
            <CrownIcon />
          </div>
          <div className={styles["priceTitle"]}>Silver Plan</div>
          <div className={styles["prices"]}>
            <div className={styles["price"]}>₹1299</div>
            <div className={styles["realPrice"]}>₹ 799 /year</div>
          </div>
          <div className={styles["mobileDesktopDiv"]}>
            <DesktopIcon />
            <p className={styles["title2"]}>Mobile + Desktop</p>
          </div>

          <div className={styles["descriptionDiv"]}>
            {silverPlan.map((i, key) => {
              return (
                <div className={styles["descriptionList"]}>
                  <CheckIcon />
                  <p className={styles["descriptionItems"]}>{i}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* //Gold Container Starts here // */}
        <div className={styles["container2"]}>
          <div className={styles["popular"]}>Most Popular</div>
          <div className={styles["iconWrapper"]}>
            <GoldCrownIcon />
          </div>
          <div className={styles["priceTitle"]}>Gold Plan</div>
          <div className={styles["prices"]}>
            <div className={styles["price"]}>₹2599</div>
            <div className={styles["realPriceGold"]}>₹ 1799 /year</div>
          </div>
          <div className={styles["mobileDesktopDiv2"]}>
            <GoldDesktopIcon />
            <p className={styles["title3"]}>Mobile + Desktop</p>
          </div>
          <div className={styles["descriptionDiv"]}>
            <div className={styles["descriptionList"]}>
              <DoubleCheckIcon />
              <p className={styles["descriptionItems"]}>All Silver Features</p>
            </div>
            <div className={styles["descriptionList"]}>
              <CheckIcon />
              <div className={styles["descriptionItems"]}>
                Add upto &nbsp; <strong> 5 Staff </strong> &nbsp; to myBillBook
              </div>
            </div>
            <div className={styles["descriptionList"]}>
              <CheckIcon />
              <p className={styles["descriptionItems"]}>
                Unlimited Mobile + Desktop Logins
              </p>
            </div>
          </div>
        </div>

        {/* //Diamond container starts here// */}

        <div className={styles["container"]}>
          <div className={styles["iconWrapper"]}>
            <DiamondCrownIcon />
          </div>
          <div className={styles["priceTitle"]}>Diamond Plan</div>
          <div className={styles["prices"]}>
            <div className={styles["price"]}>₹4599</div>
            <div className={styles["realPriceDiamond"]}>₹ 3500 /year</div>
          </div>
          <div className={styles["mobileDesktopDiv3"]}>
            <DiamondDesktopIcon />
            <p className={styles["title4"]}>Mobile + Desktop</p>
          </div>
          <div className={styles["descriptionDiv"]}>
            <div className={styles["descriptionList"]}>
              <DoubleCheckIcon />
              <p className={styles["descriptionItems"]}>
                All Silver and Gold features
              </p>
            </div>
            <div className={styles["descriptionList"]}>
              <CheckIcon />
              <p className={styles["descriptionItems"]}>
                Add &nbsp; <strong>unlimited staff </strong> &nbsp; to
                myBillBook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
