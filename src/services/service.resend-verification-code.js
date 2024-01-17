import axios from "axios";

export const resendVerificationCode = (data, callback) => {
  axios
    .post(
      "http://localhost/okesell/beokesell/public/api/resend-verification",
      data
    )
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error.response.data);
    });
};
