import axios from "axios";

export const logout = (callback) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .post(
      "http://localhost/okesell/beokesell/public/api/logout",
      {},
      {
        headers,
      }
    )
    .then((response) => {
      callback(response.data.success, response.data.message);
    })
    .catch((error) => {
      callback(error);
    });
};
