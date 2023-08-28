import { welcomeScreen, setPasswordScreen, secretPhraseScreen } from './BaseTest';

describe('New Wallet', () => {
  it('should create new wallet successfully', async () => {
    // Use the shared driver instance
    console.log('inside test');
    
    await welcomeScreen.waitToBeVisible();
    await welcomeScreen.selectCreateNewWalletOption();
    await setPasswordScreen.waitToBeVisible();
    await setPasswordScreen.createNewPassword("MyValidPaswword1!");
    await secretPhraseScreen.waitToBeVisible();
    await secretPhraseScreen.backupYourSecretPhrase();
    // await secretPhraseScreen.confirmYourSecretPhrase();
    // await secretPhraseScreen.dismissShareDataScreenIfVisible();
    // await successScreen.waitForVisible();
    // await successScreen.openWallet();
    // await homeScreen.waitForUserTipPopup();
    // await homeScreen.handleUserTipPopup();
    // await homeScreen.waitForWalletTabToBePresent();
  });
});
