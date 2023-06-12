import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('Not auth', () => {
        it('Move to main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Open not exist page', () => {
            cy.visit('/notfound');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Auth', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Open articles list', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
