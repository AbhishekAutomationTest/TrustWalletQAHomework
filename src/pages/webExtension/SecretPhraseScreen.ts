import { By, Locator, until, WebDriver } from 'selenium-webdriver';
import { delay } from '../../tests/webExtension/BaseTest';
import { BasePage } from './BasePage';

export class SecretPhraseScreen extends BasePage {

  private secretPhraseScreenHeading: By;
  private showButton: By;
  private nextButton: By;
  private copyButton: By;
  private secretPhrase: unknown;

  constructor(driver: WebDriver, explicitTimeout: number) {
    super(driver, explicitTimeout);
    this.secretPhraseScreenHeading = By.xpath(this.secretPhraseScreenHeadingXPath);
    this.showButton = By.xpath(this.showButtonXPath);
    this.nextButton = By.xpath(this.nextButtonXPath);
    this.copyButton = By.css(this.copyButtonSelector);
    this.secretPhrase = '';
  }

  /*selectors*/
  secretPhraseScreenHeadingXPath = "//h1[contains(text(), 'Back Up Your Secret Phrase')]";
  showButtonXPath = "//*[contains(@data-testid, 'next-button') and text()='Show']";
  nextButtonXPath = "//*[contains(@data-testid, 'next-button') and text()='Proceed']";
  backButtonSelector = "[data-testid='back-button']";
  copyButtonSelector = "[data-testid='copy-seed-phrase']"; // Fixed typo here

  /*page keyword functions*/

  async waitToBeVisible() {
    await this.driver.wait(until.elementsLocated(this.secretPhraseScreenHeading), this.explicitTimeout);
  }

  async backupYourSecretPhrase() {
    // Show Secret Phrase
    (await this.find(this.showButton)).click();

    await delay(2000);

    // wait for copy button to be visible

    // Copy Secret Phrase
    (await this.find(this.copyButton)).click();

    await delay(5000);

    this.secretPhrase = await this.getClipboardValue();   
    console.log('Clipboard value:', this.secretPhrase);
  }
}