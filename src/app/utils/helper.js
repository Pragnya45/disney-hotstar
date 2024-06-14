import { store } from "../Redux";

const getAuthToken = () => store.getState().profile.token;

export { getAuthToken };
