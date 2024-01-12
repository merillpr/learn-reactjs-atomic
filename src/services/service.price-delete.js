import axios from "axios";

export const deletePrice = (id, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .delete(`http://localhost/okesell/beokesell/public/api/price/${id}`, {
      headers,
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error.response.data);
    });
};
