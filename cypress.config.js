const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://floward.co.uk/',
    reporter: 'cypress-mochawesome-reporter',
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Floward: Regression',
      embeddedScreenshots: true,
      inlineAssets: true
    }
  },
});
