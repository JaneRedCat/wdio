const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');
const checkoutobject = require('../pageobjects/Checkout.page');


When(/^User selects to create a new account$/,()=>{
    checkoutobject.clickContinueButtonOnFirstStep();
    browser.pause(1000);
});

/*When(/^User fills personal details$/,()=>{
    checkoutobject.fillPersonalDetails();
    browser.pause(1000);
});*/

When(/^User enters already used email$/,()=>{
    checkoutobject.fillEmailFieldWithAlreadyUsedEmail();
});

When(/^message about existing Email appears$/,()=>{
    checkoutobject.verifyEmailAlreadyUsedMessage();
});

When(/^User enters not valid Email$/,()=>{
    checkoutobject.fillEmailFieldWithNotValidEmail();
});

Then(/^message about not valid Email appears$/,()=>{
    checkoutobject.verifyNotValidEmailMessage();
});

When(/^User enters not valid password$/,()=>{
    checkoutobject.fillPasswordFieldWithNotValidPassword();
});
