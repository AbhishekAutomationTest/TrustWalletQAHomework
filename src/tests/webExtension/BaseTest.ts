import { WebDriver, Builder, Capabilities, until } from "selenium-webdriver";
import { WelcomeScreen as WelcomeScreen } from "../../pages/webExtension/WelcomeScreen";
import * as chrome from "selenium-webdriver/chrome";
import { SetPasswordScreen } from "../../pages/webExtension/SetPasswordScreen";
import { SecretPhraseScreen } from "../../pages/webExtension/SecretPhraseScreen";
import { SuccessScreen } from "../../pages/webExtension/SuccessScreen";
import { HomeScreen } from "../../pages/webExtension/HomeScreen";

let driver: WebDriver;
const BEFOREAllTIMEOUT = 30000
const AFTERAllTIMEOUT = 10000
const IMPLICITTIMEOUT = 10000

/*all page objects*/
let welcomeScreen: WelcomeScreen;
let setPasswordScreen: SetPasswordScreen;
let secretPhraseScreen: SecretPhraseScreen;
let successScreen : SuccessScreen;
let homeScreen : HomeScreen;

  beforeAll(async () => {
    console.log('inside before');

    /*add chrome options*/
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-notifications");
    chromeOptions.addExtensions('./src/resources/Trust-Wallet.crx')

    /*add chrome capabilities*/
    const capabilities = Capabilities.chrome();

    /*build & manage driver*/
    driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).withCapabilities(capabilities).build();
    driver.manage().setTimeouts({implicit: IMPLICITTIMEOUT})
    
    /*perform beforeAll actions*/
    //await driver.get('https://facebook.com');
    await switchToWebExtensionTab(driver)
    
    /*intialize all page objects*/
    await initiateAllPageObjects();
  }, BEFOREAllTIMEOUT);

  afterAll(async () => {
    console.log('inside after');
    await driver.quit();
  }, AFTERAllTIMEOUT);

  async function initiateAllPageObjects() {
    welcomeScreen = await new WelcomeScreen(driver, IMPLICITTIMEOUT);
    setPasswordScreen = await new SetPasswordScreen(driver, IMPLICITTIMEOUT);
    secretPhraseScreen = await new SecretPhraseScreen(driver, IMPLICITTIMEOUT);
    successScreen = await new SuccessScreen(driver, IMPLICITTIMEOUT);
    homeScreen = await new HomeScreen(driver, IMPLICITTIMEOUT);
  }

  async function switchToWebExtensionTab(driver: WebDriver) {
    await driver.wait(async () => (await driver.getAllWindowHandles()).length > 1);
    const handles = await driver.getAllWindowHandles();
    const originalHandle = handles[0];
    const newTabHandle = handles[1];
    await driver.switchTo().window(newTabHandle);
  }

  export async function delay(ms: number) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
  }

  export { driver, welcomeScreen, setPasswordScreen, secretPhraseScreen, successScreen, homeScreen }; // Export the driver instance for use in other test files

