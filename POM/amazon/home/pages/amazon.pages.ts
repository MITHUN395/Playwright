
import * as Locators from '../data/locators';
// import { BrowserContext, Page ,Browser} from '@playwright/test';
export class HomePage {
    page;
    
    constructor(page) {
     
        this.page = page
    }

    async gotoHomePage(url) {
        await this.page.goto(url);
        

    }
    async search(search_key) {
        await this.page.type(Locators.search_box, search_key);
        
    }
    async toClickSuggestion() {
        await this.page.click(Locators.suggestionSelector);
        
    }
    
}
