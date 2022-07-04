const { actions } = require("../utilities/actions");

class Gifts{
    constructor() {
        this.enrichedRoseProduct = `a[href*='enriched-rose']`;

    }

    viewProduct() {
        actions.getElement({locator: this.enrichedRoseProduct}).invoke('removeAttr', 'target').click();
    }
}

export const gifts = new Gifts();