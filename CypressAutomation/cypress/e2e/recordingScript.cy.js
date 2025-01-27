describe('Adactin Assessment', () =>
    {
        it("Recording Script", () =>
        {
            cy.visit('https://opensource-demo.orangehrmlive.com/');


            /* ==== Generated with Cypress Studio ==== */
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
            cy.get('.oxd-button').click();
            cy.get('.oxd-button').click();
            cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
            cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
            /* ==== End Cypress Studio ==== */
        }
        )
    }
)