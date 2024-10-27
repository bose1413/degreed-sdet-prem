import 'cypress-xpath';

describe('GitHub Homepage Tests', () => {
    beforeEach(() => {
        cy.visit('https://github.com/');
    });

    it('should display the GitHub logo', () => {
        cy.get('a[href="/"] > .octicon').should('be.visible');
    });

    it('should navigate to the sign-up page when "Sign up" button is clicked', () => {
        cy.get('a[href*="/signup?"]').then(($element) => {
            if ($element.length > 0 && $element.is(':visible')) {
                cy.wrap($element).click();
            } else {
                cy.log('Signup direct element is not visible, hence going into menu');
                cy.get(`button[aria-label="Toggle navigation"][type='button'][data-view-component="true"]`).click();
                cy.wrap($element).click();
            }
        });
        cy.url().should('include', '/signup');
        cy.get('#email', {timeout: 10000}).should('be.visible');
    });

    it('should navigate to the Pricing page', () => {
        cy.get(`a[href*="/pricing"][class*='HeaderMenu-link']`).then(($element) => {
            if ($element.length > 0 && $element.is(':visible')) {
                cy.wrap($element).click();
            } else {
                cy.log('Signup direct element is not visible, hence going into menu');
                cy.get(`button[aria-label="Toggle navigation"][type='button'][data-view-component="true"]`).click();
                cy.wrap($element).click();
            }
        });
        cy.url().should('include', '/pricing');
        cy.xpath(`//p[text()='Recommended']`).should('be.visible');
    });
});
