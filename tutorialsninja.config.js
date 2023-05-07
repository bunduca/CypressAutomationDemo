const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },

baseUrl: "https://tutorialsninja.com/demo/",

  },
});
