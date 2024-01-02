import axios from "axios";

export const updateProduct = (id, product, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  axios
    .put(`http://localhost/okesell/beokesell/public/api/product/${id}`, product, { headers })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
