import axios from "axios";

export const getProducts = (callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get("http://localhost/okesell/beokesell/public/api/transaction-recaps", { headers })
    .then((response) => {
      callback(response.data.results);
    })
    .catch((error) => {
      callback(error);
    });
};
