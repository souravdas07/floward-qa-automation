import { actions } from "../utilities/actions";

class Home{
    constructor() {
        this.navigationBar = '#scrollNavbar';
        this.giftsMenu = `div[id=menu] a[href*='/gifts']`; 
    }

    verifyNavigationBar() {
        actions.verifyElement({locator: this.navigationBar})
    }

    verifyAndClickGiftsMenu() {
        actions.verifyElement({locator: this.giftsMenu, enabled: true})
        actions.clickElement({locator: this.giftsMenu})
    }
}

export const home = new Home();