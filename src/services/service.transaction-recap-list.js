import axios from "axios";

export const getTransactionRecapList = (id, callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`http://localhost/okesell/beokesell/public/api/transaction-recap-list/${id}`, {
      headers,
    })
    .then((response) => {
      callback(response.data.results);
    })
    .catch((error) => {
      callback(error);
    });
};
