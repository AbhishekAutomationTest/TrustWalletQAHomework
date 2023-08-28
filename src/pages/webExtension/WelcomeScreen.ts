import { By, Locator, until, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class WelcomeScreen extends BasePage {

  private createNewWalletOption;
  private welcomeScreenHeading: By;

  constructor(driver: WebDriver, explicitTimeout: number) {
    super(driver, explicitTimeout);
    this.createNewWalletOption = By.css(this.createNewWalletOptionLocator)
    this.welcomeScreenHeading = By.xpath(this.welcomeScreenHeadingXPath)
  }

  /*selectors*/
  welcomeScreenHeadingXPath = "//h1[contains(text(), 'Welcome')]"
  createNewWalletOptionLocator = "[data-testid='create-new-wallet']"

  /*page keyword functions*/

  async waitToBeVisible() {
    await this.driver.wait(until.elementsLocated(await this.welcomeScreenHeading),this.explicitTimeout)
  }

  async selectCreateNewWalletOption() {
    await (await this.find(this.createNewWalletOption)).click()
  }
}
