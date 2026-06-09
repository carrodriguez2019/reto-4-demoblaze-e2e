module.exports = {
  default: {
    paths: ['features/playwright/*.feature'],
    require: ['playwright/steps/*.js', 'playwright/support/*.js'],
    format: ['html:reports/playwright-report.html', 'allure-cucumberjs/reporter'],
    formatOptions: {
      resultsDir: 'allure-results'
    }
  }
};
