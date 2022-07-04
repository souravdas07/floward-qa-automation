class Actions {

    getElement({ locator, xpath = false, index }) {
        if (!index)
            return xpath ? cy.xpath(locator) : cy.get(locator)
        else
            return xpath ? cy.xpath(locator).eq(index) : cy.get(locator).eq(index)
    }

    verifyElement({ locator, xpath = false, visible = true, enabled = false }) {
        this.getElement({ locator, xpath})
            .should(visible ? 'be.visible' : 'not.be.visible')
            .should(enabled ? 'not.be.disabled' : 'not.be.enabled')
    }

    verifyURL({ url, exact }) {
        cy.url().should(exact ? 'eq' : 'contains', url)
    }

    verifyText({ locator, xpath = false, text, exact }) {
        this.getElement({ locator, xpath })
            .should(exact ? 'have.text' : 'include.text', text)
    }

    clickElement({ locator, xpath = false, force = false, multipleClick = false }) {
        this.getElement({ locator, xpath })
            .click({ force: force ? true : false, multiple: multipleClick ? true : false })
    }
}

export const actions = new Actions();