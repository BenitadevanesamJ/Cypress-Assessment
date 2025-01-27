
class Hotel
{

    textUsername = "#username";
    textPassword = "#password";
    btnLogin = "#login";
    loginTitle = ".login_title";
    btnSearch = "#Submit";
    hotelListSelect = ".login_title";
    btnContinue = "#continue";
    textFirstName = "#first_name";
    textLastName = "#last_name";
    textCreditCardNo = "#cc_num";
    textCVVNo = "#cc_cvv";
    btnBookNow = "#book_now";
    btnitenary = "#my_itinerary"
    
    setUsername(username)
    {
        cy.get(this.textUsername).type(username);
    }
    setPassword(password)
    {
        cy.get(this.textPassword).type(password);
    }
    clickSubmit()
    {
        cy.get(this.btnLogin).click();
    }

    verifyTitle()
    {
        cy.get(this.loginTitle).should('be.visible');
    }
    clickSearch()
    {
        cy.get(this.btnSearch).click();
    }
    verifySelectHotelTitle()
    {
        cy.get(this.hotelListSelect).should('be.visible');
    }

    clickContinue()
    {
        cy.get(this.btnContinue).click();
    }
    setFisrtName(firstname)
    {
        cy.get(this.textFirstName).type(firstname);
    }
    setLastName(lastname)
    {
        cy.get(this.textLastName).type(lastname);
    }
    setCreditCardNo(ccno)
    {
        cy.get(this.textCreditCardNo).type(ccno);
    }
    get billingAddress()
    {
       return cy.get("#address");
    }

    enterBillingAddress(address)
    {
        (this.billingAddress).type(address);
    }

    clickBookNow()
    {
        cy.get(this.btnBookNow).click();
    }
    setCVVNo(cvvno)
    {
        cy.get(this.textCVVNo).type(cvvno);
    }
    clickItenary()
    {
        cy.get(this.btnitenary).click();
    }

}

    export default Hotel;