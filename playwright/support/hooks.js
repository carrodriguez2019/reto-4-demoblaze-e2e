const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(30000);

// Antes de cada escenario.
Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

// Despues de cada paso, toma evidencia si el paso falla.
AfterStep(async function ({ result }) {
  if (result.status === 'FAILED') {
    const screenshot = await this.page.screenshot({
      path: `screenshots/playwright-${Date.now()}.png`,
      fullPage: true
    });

    this.attach(screenshot, 'image/png');
  }
});

// Despues de cada escenario, cierra navegador y sesion.
After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
