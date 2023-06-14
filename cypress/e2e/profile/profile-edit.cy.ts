let profileId = '';

describe('Open profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('and successfully load', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('and edit it', () => {
        const newName = 'new';
        const newLastName = 'update';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
