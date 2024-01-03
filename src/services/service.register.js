import axios from "axios";

export const register = (user, callback) => {
  axios
    .post("http://localhost/okesell/beokesell/public/api/register", user)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
