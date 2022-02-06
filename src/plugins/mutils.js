export default {
  install: (app, options) => {
    app.provide("mutils", {
      formatCurrency(amount, lang = "en-US", currency = "usd") {
        const formatter = new Intl.NumberFormat(lang, {
          style: "currency",
          currency,
          maximumFractionDigits: 0,
        });

        return formatter.format(amount);
      },
    });
  },
};
