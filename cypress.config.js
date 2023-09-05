const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Set default timeout to 6 sec
  defaultCommandTimeout: 6000,
  e2e: {
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/shilpa/cypressPractice/*.js",
  },
});
