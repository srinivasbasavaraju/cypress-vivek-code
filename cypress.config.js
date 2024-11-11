const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    retries: {
      runMode: 0,
      openMode:0,
      },
    pageLoadTimeout: 40000,
    defaultCommandTimeout:8000,
    execTimeout:60000,
    taskTimeout:4000,
    baseUrl:"https://rahulshettyacademy.com/",
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
