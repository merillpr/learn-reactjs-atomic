import axios from "axios";

export const verifyEmail = (data, callback) => {
  axios
    .post(
      "http://localhost/okesell/beokesell/public/api/email-verification",
      data
    )
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error.response.data);
    });
};
