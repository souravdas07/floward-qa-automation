import { actions } from "../utilities/actions";

class ProductDetails{
    constructor() {
        this.addToCartButton = 'button[class^=add-to-cart]';
    }

    clickAddToCart() {
        actions.verifyElement({locator: this.addToCartButton, enabled: true})
        actions.clickElement({locator: this.addToCartButton})
    }
}

export const productDetails = new ProductDetails();