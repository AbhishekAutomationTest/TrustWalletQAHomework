import { welcomeScreen, setPasswordScreen, secretPhraseScreen } from './BaseTest';

describe('Success Flow', () => {
  it('should create new wallet successfully', async () => {
    // Use the shared driver instance
    console.log('inside test');
    
    await welcomeScreen.waitToBeVisible();
    await welcomeScreen.selectCreateNewWalletOption();
    await setPasswordScreen.waitToBeVisible();
    await setPasswordScreen.setNewPassword("MyValidPaswword1!");
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

  it('should not allow to proceed with empty password fields', async () => {
    await welcomeScreen.waitToBeVisible();
    await welcomeScreen.selectCreateNewWalletOption();
    await setPasswordScreen.waitToBeVisible();
    await setPasswordScreen.verifyEmptyPasswordFlow();
  })

  it('should display an error message when passwords do not match', async () => {
    await welcomeScreen.waitToBeVisible();
    await welcomeScreen.selectCreateNewWalletOption();
    await setPasswordScreen.waitToBeVisible();
    await setPasswordScreen.verifyPasswordDoNotMatchError('MyValidPaswword1!', 'MyValidPaswword1!!');
  })
});
