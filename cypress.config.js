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
    projectId: "fi7xt2",
    //npx cypress run --record --key b0fcf3dd-161c-4aec-8c05-439fc55076f0
    //baseUrl:"https://rahulshettyacademy.com/",
    baseUrl:"https://automationexercise.com/api",
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
