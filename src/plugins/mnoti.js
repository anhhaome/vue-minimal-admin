export default {
  install: (app) => {
    app.provide("mnoti", {
      registration: {},

      register(doc) {
        this.registration = doc;
      },

      async push(type, message) {
        return await this.registration.value.push(type, message);
      },
    });
  },
};
