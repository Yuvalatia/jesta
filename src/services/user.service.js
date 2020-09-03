import Axios from "axios";

export const getUserDetailsByToken = async (token) => {
  let tokenRes;
  try {
    tokenRes = await Axios.post(
      process.env.REACT_APP_BACKEND_URL_USERS + "/getUserDetails",
      null,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return tokenRes.data;
  } catch (err) {
    throw err;
  }
};

export const userLogin = async (credentials) => {
  try {
    const response = await Axios.post(
      process.env.REACT_APP_BACKEND_URL_USERS + "/login",
      credentials,
      {}
    );
    const userData = await getUserDetailsByToken(response.data.token);
    return { token: response.data.token, user: userData.user };
  } catch (err) {
    throw err;
  }
};
