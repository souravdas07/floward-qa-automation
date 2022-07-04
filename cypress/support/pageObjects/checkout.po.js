const { actions } = require("../utilities/actions");
const temp = require("../../fixtures/app-data.json");
const checkoutData = temp.checkout;

class Checkout{
    constructor() {
        this.addOnModal = 'div[class$=p-dialog-content]';
        this.addOnModalHeader = 'div[class$=p-dialog-content] h6';
        this.addOnModalText = 'div[class$=p-dialog-content] p';
        this.addOnModalContinueButton = 'div[class$=p-dialog-content] button[class$=btn-floward]';
        this.congratsMessage = '(//p-accordiontab//p)[1]';
    }

    verifyModalDisplayed() {
        actions.verifyElement({locator: this.addOnModal})
        actions.verifyText({locator: this.addOnModalHeader, text: checkoutData.addOnModalHeader, exact: true})
        actions.verifyText({locator: this.addOnModalText, text: checkoutData.addOnModalLabel, exact: true})
    }

    clickAddOnModalContinueButton() {
        actions.clickElement({locator: this.addOnModalContinueButton})
    }

    verifyMessage() {
        actions.verifyText({locator: this.congratsMessage, exact: true, text: checkoutData.message, xpath: true})
    }
}

export const checkout = new Checkout();