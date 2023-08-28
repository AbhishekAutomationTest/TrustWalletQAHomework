import { By, Locator, until, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class SetPasswordScreen extends BasePage {

  private setPasswordScreenHeading: By;
  private newPasswordInput: By;
  private confirmPasswordInput: By;
  private termsCheckbox: By;
  private nextButton: By;

  constructor(driver: WebDriver, explicitTimeout: number) {
    super(driver, explicitTimeout);
    this.setPasswordScreenHeading = By.xpath(this.setPasswordScreenHeadingXPath)
    this.newPasswordInput = By.css(this.newPasswordInputSelector)
    this.confirmPasswordInput = By.css(this.confirmPasswordInputSelector)
    this.termsCheckbox = By.css(this.termsCheckboxSelector)
    this.nextButton = By.css(this.nextButtonSelector)
  }

  /*selectors*/
  setPasswordScreenHeadingXPath = "//h1[contains(text(), 'Set Password')]"
  newPasswordInputSelector = "[data-testid='password']"
  confirmPasswordInputSelector = "[data-testid='confirm-password']"
  termsCheckboxSelector = "[data-testid='terms-checkbox']"
  nextButtonSelector = "[data-testid='next-button']"
  backButtonSelector = "[data-testid='back-button']"

  /*page keyword functions*/

  async waitToBeVisible() {
    await this.driver.wait(until.elementsLocated(this.setPasswordScreenHeading),this.explicitTimeout)
  }

  async createNewPassword(password: string) {
    await (await this.find(this.newPasswordInput)).sendKeys(password);
    await (await this.find(this.confirmPasswordInput)).sendKeys(password);
    await (await this.find(this.termsCheckbox)).click();
    await (await this.find(this.nextButton)).click();
  }
}
