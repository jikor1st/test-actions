const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const run = async () => {
  const url = "https://www.google.com";

  let driver;
  try {
    const opts = new chrome.Options();

    opts.addArguments("--headless");
    opts.addArguments("--no-sandbox");
    // opts.addArguments("--single-process");
    opts.addArguments("--disable-dev-shm-usage");

    driver = await new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(opts)
      .build();

    await driver.get(url);
    console.log("driver: ", driver);
    await driver.quit();
  } catch (error) {
    console.log("error: ", error);
  }
};

run();
