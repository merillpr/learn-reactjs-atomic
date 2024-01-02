import axios from "axios";

export const updateTransaction = (id, transaction, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  axios
    .put(`http://localhost/okesell/beokesell/public/api/transaction/${id}`, transaction, {
      headers,
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};
