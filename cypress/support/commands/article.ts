import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    userId: '1',
    title: 'TEST ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '25.05.2022',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'auth',
            },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'auth',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
