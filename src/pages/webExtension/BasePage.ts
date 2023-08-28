import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { delay } from '../../tests/webExtension/BaseTest';

export class BasePage {
  driver: WebDriver;
  explicitTimeout = 20000;


  constructor(driver: WebDriver, explicitTimeout: number) {
    this.driver = driver;
    this.explicitTimeout = explicitTimeout
  }

  async find(locator: By): Promise<WebElement> {
    return await this.driver.findElement(locator);
  }

  async getClipboardValue() {
    const clipboardValue = await this.driver.executeScript(() => {
      const tempTextarea = document.createElement('textarea');
      document.body.appendChild(tempTextarea);
  
      tempTextarea.focus();
      document.execCommand('paste');
      const value = tempTextarea.value;
      document.body.removeChild(tempTextarea);
      return value;
    });
    return clipboardValue;
  }
}
