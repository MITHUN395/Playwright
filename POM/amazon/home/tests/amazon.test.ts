import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/amazon.pages';
import { CartPage } from '../pages/cart.pages';
import * as TestData from '../data/testData';

test('AmazonTest1', async ({ page }) => {
  const loginPage = new HomePage(page);
  const cartPage = new CartPage(page);

  await loginPage.gotoHomePage(TestData.urls.homepage);
  await loginPage.search(TestData.search_key.key1);
  await loginPage.toClickSuggestion();
  await cartPage.capture_prices();
  
  
});
