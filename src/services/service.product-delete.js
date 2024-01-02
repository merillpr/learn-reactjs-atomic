import axios from "axios";

export const deleteProduct = (id, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .delete(`http://localhost/okesell/beokesell/public/api/product/${id}`, { headers })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
