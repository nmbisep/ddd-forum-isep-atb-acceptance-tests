import {Given, When, Then} from '@wdio/cucumber-framework';
import {expect} from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages.login.open(page);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    let pageMmessage : WebdriverIO.Element = await $('.Toastify__toast-body');
    await expect(pageMmessage).toHaveTextContaining(message);
});

