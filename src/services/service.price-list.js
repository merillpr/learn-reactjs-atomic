import axios from "axios";

export const getPriceList = (callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get("http://localhost/okesell/beokesell/public/api/price", { headers })
    .then((response) => {
      callback(response.data.results);
    })
    .catch((error) => {
      callback(error);
    });
};
