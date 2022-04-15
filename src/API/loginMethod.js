import axios from "axios";

const base_URL = "https://niobooks.in/api/web";

const Request = axios.create({
  baseURL: base_URL,
  header: {
    "Content-Type": "application/json",
    accept: "application/json",
    client: "web",
  },
});

export const otpRequest = async (mobileNo) => {
  try {
    const res = await Request.post("/request_otp", {
      mobile_number: mobileNo,
    });
    if (res) {
      return res;
    }
  } catch (err) {
    alert(err.response.data.error);
    console.log(err.response);
  }
};

export const loginAuthRequest = async (mobileNo, otp) => {
  try {
    const res = await Request.post("/authenticate", {
      mobile_number: mobileNo,
      otp_code: otp,
    });
    if (res) {
      return res;
    }
  } catch (err) {
    alert(err.response.data.error);
    console.log(err.response);
  }
};
