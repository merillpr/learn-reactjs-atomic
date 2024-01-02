import axios from "axios";

export const getProductList = (callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get("http://localhost/okesell/beokesell/public/api/product", { headers })
    .then((response) => {
      callback(response.data.results);
    })
    .catch((error) => {
      callback(error);
    });
};
