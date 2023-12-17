import axios from "axios";

export const getTransactionRecap = (id, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`http://localhost/okesell/beokesell/public/api/transaction-recap/${id}`, {
      headers,
    })
    .then((response) => {
      callback(response.data.results[0]);
    })
    .catch((error) => {
      callback(error);
    });
};
