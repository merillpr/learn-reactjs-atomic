import axios from "axios";

export const createProduct = (product, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  axios
    .post(`http://localhost/okesell/beokesell/public/api/product`, product, { headers })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
