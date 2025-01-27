
describe('Adactin Assessment', () =>
    {
        it("iframe Testcase", () =>
        {

            cy.visit("https://www.tiny.cloud/docs/tinymce/latest/")
            let iframe = cy.get("#default-editor_ifr").its('0.contentDocument.body')
            .should('be.visible').then(cy.wrap);

            iframe.clear().type("Handling Frames");
        }
        )
    }
)