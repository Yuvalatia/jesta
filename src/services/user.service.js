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

export const userRegister = async (registerDetails) => {
  const { fullname, birth, email, password, phone, image } = registerDetails;
  const newUser = { fullname, birth, email, password, phone, image };
  try {
    await Axios.post(
      process.env.REACT_APP_BACKEND_URL_USERS + "/register",
      newUser,
      {}
    );
    return await userLogin({ email, password });
  } catch (err) {
    throw err;
  }
};

export const sentApplicationToJob = async (token, jobId) => {
  try {
    await Axios.post(
      process.env.REACT_APP_BACKEND_URL_USERS + "/assginToJob",
      { jobId: jobId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (err) {
    throw err;
  }
};

export const addNewJob = async (token, jobDetails) => {
  try {
    await Axios.post(process.env.REACT_APP_BACKEND_URL_JOBS, jobDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    throw err;
  }
};
