import axios from 'axios';

//  when token is fetched from the database, we wanna then send the token with every request
const setAuthToken = (token) => {
  if (token) {
    axios.default.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
