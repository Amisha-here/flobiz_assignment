import React from "react";
import UserToken from "../../utils/userToken";

import styles from "./ItemsNavBar.module.css";

const ItemsNavBar = () => {
  const { mobileNo, storeData } = UserToken();
  const logOut = () => {
    window.location.reload(false);
    storeData({});
  };

  return (
    <div className={styles["menu"]}>
      <div className={styles["menuItems1"]}>
        <div className={styles["menuItem"]} id="username">
          {mobileNo}
        </div>
        <div className={styles["menuItem"]} onClick={logOut}>
          <p className={styles["logout"]}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsNavBar;
