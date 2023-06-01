import { Page } from 'puppeteer';
import * as Locators from '../data/locators';

export class CartPage {
    page;
    page1; secondHighest
    constructor(page) {
        this.page = page;
    }

    async capture_prices() {
        await this.page.waitForSelector(Locators.prices);
        const prices = await this.page.$$(Locators.prices);
        const map = new Map();
    
        for (const element of prices) {
            const text = await element.innerText();
            const value = parseInt(text.replace(/,/g, ''), 10);
            map.set(value, element);
        }
    
        const valuesArray = Array.from(map.keys());
        for (let i = 0; i < valuesArray.length - 1; i++) {
            for (let j = 0; j < valuesArray.length - 1 - i; j++) {
                if (valuesArray[j] < valuesArray[j + 1]) {
                    // Swap values
                    let temp = valuesArray[j];
                    valuesArray[j] = valuesArray[j + 1];
                    valuesArray[j + 1] = temp;
                }
            }
        }
    
        const sortedValues = valuesArray;
        console.log("Sorted Values:", sortedValues);
    
        this.secondHighest = sortedValues[1];
        console.log("Second Highest:", this.secondHighest);
        const page1Promise = this.page.waitForEvent('popup');
        const elementToClick = map.get(this.secondHighest);
    
        if (elementToClick) {
            await elementToClick.click();
            this.page1 = await page1Promise;
        }
    }
    
}
