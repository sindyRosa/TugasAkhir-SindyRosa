import loginPage from "../../../pom/orangeHRM/login.js";

describe('Halaman Directory',() => {
    //TC1
it('Tampilan login',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionsummary");
                loginPage.buttonLogin().click();
                cy.wait("@actionsummary").then((intercept) => {
                expect(intercept.response.statusCode).to.eq(200);
                })
        loginPage.menuDashboard().should('have.text','Dashboard');
        loginPage.menusidebar().contains('Directory').click();
        loginPage.textdirectory().should('have.text','Directory');
        loginPage.inputemployee().type('mini');
        loginPage.selectname().contains('mine').click();
        loginPage.jobTitle().eq(0).click();
        loginPage.pilihjobtitle().contains('HR Manager').click();
        loginPage.location().eq(1).click();
        loginPage.pilihlokasi().contains('Texas R&D').click();
        //cy.get('Peter Mac Anderson', { timeout: 10000 }) // Tunggu hingga 10 detik
        //loginPage.jobtitle().contains('Job Title').click();
        
        //cy.intercept("GET","**/employees").as("employees");
        //     //loginPage.buttonReset().click();
        //     cy.wait("@employees").then((intercept) => {
        //             expect(intercept.response.statusCode).to.eq(200);
        //     })
            
    })
})