import { By, until, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class SuccessScreen extends BasePage {

  constructor(driver: WebDriver, explicitTimeout: number) {
    super(driver, explicitTimeout);
  }

  async getTitle() : Promise<string>{
    return this.driver.getTitle()
  }

  async waitToBeVisible() {
    const welcomeElementCSSSelector = ""
    await this.driver.wait(until.elementsLocated(By.css(welcomeElementCSSSelector)),this.explicitTimeout)
  }
}
