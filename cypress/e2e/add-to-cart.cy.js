const { checkout } = require("../support/pageObjects/checkout.po");
const { gifts } = require("../support/pageObjects/gifts.po");
const { home } = require("../support/pageObjects/home.po");
const { productDetails } = require("../support/pageObjects/product-details.po");
const { actions } = require("../support/utilities/actions");

describe('Floward: Add To Cart', () => {
    before(() => {
        cy.intercept('**/Occasions/all').as('all')
        cy.visit('/');
        cy.wait('@all');
    })

    it('Select category as Gifts ', () => {
        home.verifyNavigationBar();
        home.verifyAndClickGiftsMenu();
        actions.verifyURL({url: 'gifts', exact: false});
        cy.screenshot('select-category');
    })

    it('View product', () => {
        gifts.viewProduct();
        actions.verifyURL({url: 'enriched-rose', exact: false});
        cy.screenshot('view-product');
    })

    it('Add product to cart', () => {
        productDetails.clickAddToCart();
        checkout.verifyModalDisplayed();
        checkout.clickAddOnModalContinueButton();
        checkout.verifyMessage();
        cy.screenshot('add-to-cart');
    })

})