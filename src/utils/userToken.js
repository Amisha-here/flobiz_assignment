import { useState } from "react";

export default function UserToken() {
  const [isToken, setIsToken] = useState(() => {
    const string = localStorage.getItem("userData");
    if (string) {
      const object = JSON.parse(string);
      if (object) {
        if (object.token) return true;
        else return false;
      } else return false;
    } else return false;
  });

  const [mobileNo, setMobileNo] = useState(() => {
    const string = localStorage.getItem("userData");
    if (string) {
      const object = JSON.parse(string);
      if (object) return object.mobile_number;
      else return "error";
    } else return "error";
  });

  const storeData = (loginResponse) => {
    localStorage.setItem("userData", JSON.stringify(loginResponse));
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.token) {
      setIsToken(true);
      if (userData.mobile_number) setMobileNo(userData.mobile_number);
      console.log(isToken, userData.token, mobileNo);
      window.location.reload(false);
    }
  };

  return { storeData, isToken, mobileNo };
}
