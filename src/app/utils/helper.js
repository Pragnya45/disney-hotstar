import { store } from "../Redux";

const getAuthToken = () => store.getState().profile.token;

const emailValidation = (data) => {
  // eslint-disable-next-line
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(data);
};

export { getAuthToken, emailValidation };
