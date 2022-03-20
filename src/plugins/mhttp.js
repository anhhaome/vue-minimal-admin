import axios from "axios";

export default {
  install: (app) => {
    const validateStatus = (status) => status >= 200 && status < 500;

    app.provide("mhttp", {
      token: null,
      headers: {},

      createHttpClient(baseURL = "/") {
        const headers = {
          ...this.headers,
        };

        const token = this.token;
        if (token) {
          headers.authorization = `Bearer ${token}`;
        }

        return axios.create({ baseURL, headers, validateStatus });
      },
    });
  },
};
