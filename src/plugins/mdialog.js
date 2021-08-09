export default {
  install: (app) => {
    app.provide("mdialog", {
      registration: {},

      register(doc) {
        this.registration = doc;
      },

      async show(name) {
        if (!this.registration[name]) return null;

        return await this.registration[name].value.show();
      },
    });
  },
};
