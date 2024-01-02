import axios from "axios";

export const updatePrice = (id, price, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  axios
    .put(`http://localhost/okesell/beokesell/public/api/price/${id}`, price, {
      headers,
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
