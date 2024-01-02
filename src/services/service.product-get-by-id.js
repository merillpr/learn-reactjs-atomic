import axios from "axios";

export const getProductById = (id, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  axios
    .get(`http://localhost/okesell/beokesell/public/api/product/${id}`, { headers })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
