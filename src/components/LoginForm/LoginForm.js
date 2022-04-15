import React from "react";
import { useState } from "react";
import UserToken from "../../utils/userToken";
import { otpRequest, loginAuthRequest } from "../../API/loginMethod";

import styles from "./LoginForm.module.css";

function LoginForm() {
  let timerOn = true;
  function timer(remaining) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById("timer").innerHTML = m + ":" + s;
    remaining -= 1;

    if (remaining >= 0 && timerOn) {
      setTimeout(function () {
        timer(remaining);
      }, 1000);
      return;
    }
    if (!timerOn) {
      return;
    }
    alert("Timeout for otp");
  }

  const { storeData } = UserToken();
  const [otpcode, setOtpcode] = useState(false);
  const [mobileNumber, setMobileNumber] = useState();
  const [otp, setOtp] = useState(false);

  const loginRequest = async (event) => {
    event.preventDefault();
    if (otpcode && otp) {
      const res = await loginAuthRequest(mobileNumber, otp);
      if (!res.data.error) {
        storeData(res.data);
      }
    } else {
      const res = await otpRequest(mobileNumber);
      if (!res.data.error) {
        setOtpcode(true);
        document.getElementById("otp").style.display = "block";
        timer(120);
      }
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <form className={styles["form"]} onSubmit={loginRequest}>
        <h1>Login to myBillBook</h1>

        <label className={styles["label"]}>
          <div style={{ margin: "10px 0" }}>Enter Mobile Number</div>
          <div style={{ display: "flex" }}>
            <div className={styles["input-pre"]}>+91</div>
            <input
              className={styles["phoneInput"]}
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              onChange={(mobNo) => setMobileNumber(mobNo.target.value)}
            />
          </div>
        </label>

        <div id="otp" style={{ display: "none" }}>
          <label className={styles["label"]}>
            <div style={{ margin: "10px 0" }}>Enter OTP</div>
            <input
              style={{ marginBottom: "5px" }}
              className={styles["input"]}
              type="text"
              name="otp"
              placeholder="One Time Password"
              onChange={(OTP) => setOtp(OTP.target.value)}
            />
          </label>
          <small>
            Resend OTP in{" "}
            <span id="timer" style={{ fontWeight: "bold" }}></span> Seconds
          </small>
        </div>

        <div>
          <input
            style={{
              cursor: "pointer",
              backgroundColor: otpcode ? "#808080" : "#6976d9",
            }}
            className={styles["submitInput"]}
            type="submit"
            value={otpcode ? "Login" : "Send OTP"}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
