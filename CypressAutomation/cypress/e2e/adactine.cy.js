

import Hotel from "../PageObject/adactinLocators"


describe('Adactin Assessment', () =>
{
    it("Reserve Hotel Testcase", () =>
    {
        // Loading data from Fixture and Page Object file
        cy.fixture("adactinData.json").then((data) =>
        {
          
            
            cy.visit("https://adactinhotelapp.com/")
            
            const ln = new Hotel();
            ln.setUsername(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyTitle();

            //UI Elements
           //dropdown selection
           
           cy.get("#location").select('Melbourne').should('have.value','Melbourne')
           cy.get("#hotels").select('Hotel Creek').should('have.value','Hotel Creek')
           cy.get("#room_type").select('Double').should('have.value','Double')
           ln.clickSearch();
           ln.verifySelectHotelTitle();

           //Radio button
           //check visbility of element
            cy.get("#radiobutton_0").should('be.visible')
            .check().should('be.checked')// assertion
            ln.clickContinue();

            ln.setFisrtName(data.firstname);
            ln.setLastName(data.lastname);
            ln.enterBillingAddress(data.address);
            ln.setCreditCardNo(data.ccno);

            cy.get("#cc_type").select('VISA').should('have.value','VISA');
            cy.get("#cc_exp_month").select('March').should('have.value','3');
            cy.get("#cc_type").select('VISA').should('have.value','VISA');
            cy.get("#cc_exp_year").select('2027').should('have.value','2027');
            ln.setCVVNo(data.cvvno);
            ln.clickBookNow();
            cy.wait(2000);
            cy.get("#my_itinerary").should('be.visible').click();
            
            
            //checkbox
            cy.get("#check_all").should('be.visible')
            .check().should('be.checked') // assertion
            cy.get("input[value='Cancel Selected']").click();
        } 
    )
  }
)

    }

)

