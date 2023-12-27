import axios from "axios";

export const createTransaction = (transaction, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .post(
      "http://localhost/okesell/beokesell/public/api/transaction",
      transaction,
      {
        headers,
      }
    )
    .then((response) => {
      callback(response.data.message);
    })
    .catch((error) => {
      callback(error);
    });
};
