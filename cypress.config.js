const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  e2e: {
    specPattern: 'features/cypress/*.feature',
    screenshotsFolder: 'screenshots/cypress',
    videosFolder: 'reports/cypress-videos',
    video: true,
    supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      allureCypress(on, config, {
        resultsDir: 'allure-results'
      });

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      return config;
    }
  }
});
