import * as token from "../helpers/local-storage";

const { REACT_APP_API_DOMAIN } = process.env;
const BASE_URL = REACT_APP_API_DOMAIN;

export default async (path, { body = null, method = "GET" } = {}) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.getToken()}`
    },
    method
  };
  if (body) Object.assign(options, { body: JSON.stringify(body) });

  const response = await fetch(`${BASE_URL}${path}`, options);
  const json = await response.json();

  return json;
};
