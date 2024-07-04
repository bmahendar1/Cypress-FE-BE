import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: false,
    attachments: true,
    embeddedScreenshots: true,
    reportPageTitle: "Cypress FE BE",
    inlineAssets: true
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
