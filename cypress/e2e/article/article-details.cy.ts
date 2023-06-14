let currentArticleId = '';

describe('Open article details', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('and successfully loaded', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });
    it('and recommendations list successfully loaded', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('and send comment', () => {
        cy.getByTestId('ArticleDetails.info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('and send rating', () => {
        cy.getByTestId('ArticleDetails.info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
