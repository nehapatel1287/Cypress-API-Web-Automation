class CreateReportPage {
    visit() {
      cy.visit('https://demo.voiro.com/phoenix/'); // Update this with the correct login URL if needed
    }
  
    login(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
    }
  
    navigateToCreateReport() {
       
      cy.get(".icon3-report-builder").click(); // Update with the actual selector
      cy.wait(9000)
      cy.get('.cursor > .icon2-add').click();
    }
  
    // fillReportDetails(details) {
    //   cy.get('input[name="reportName"]').type(details.name);
    //   cy.get('textarea[name="description"]').type(details.description);
    //   cy.get('input[name="date"]').type(details.date);
    //   // Add more fields as necessary based on your application
    // }
  
    // submitReport() {
    //   cy.get('button[type="submit"]').click();
    // }
  
    // verifyReportCreation() {
    //   cy.contains('Report created successfully').should('be.visible');
    //   // Add more verification steps as necessary
    // }
  }
  
  export default CreateReportPage;
  