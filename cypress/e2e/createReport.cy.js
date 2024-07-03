import CreateReportPage from '../POM/createReportPage';

describe('Create Report Feature with DDT', () => {
  const createReportPage = new CreateReportPage();

  it("test",() => {
    cy.fixture('createReportData').then((data) => {
      createReportPage.visit();
      createReportPage.login(data.login.username, data.login.password);
      cy.wait(6000)
      createReportPage.navigateToCreateReport();
      cy.fixture('createReportData').then((data)=>{
        createReportPage.fillReportDetails(reportDetails);
      })
    
    });
  });

//   it('should Goto to Report page and click on the add button', () => {
//     cy.wait(6000)
//     createReportPage.navigateToCreateReport();
//     // cy.fixture('createReportData').then((data) => {
//     //   data.reports.forEach((reportDetails) => {
//     //     createReportPage.navigateToCreateReport();
//     //     createReportPage.fillReportDetails(reportDetails);
//     //     createReportPage.submitReport();
//     //     createReportPage.verifyReportCreation();

//     //     // Optionally, add cleanup code here to delete the created report
//     //     // to ensure the next iteration starts with a clean state
//     //     // createReportPage.deleteReport(reportDetails.name);
//     //   });
//     // });
//   });
});
