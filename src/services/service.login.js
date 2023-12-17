import axios from "axios";

export const login = (user, callback) => {
  axios
    .post("http://localhost/okesell/beokesell/public/api/login", user)
    .then((response) => {
      callback(response.data.results.token);
    })
    .catch((error) => {
      callback(error);
    });
};
