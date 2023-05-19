import { Rating } from '@/entities/Rating';
import { rtqApi } from '@/shared/api/rtqApi';

interface GetArticleRatingProps {
    userId: string;
    articleId: string;
}

interface RateArticleProps {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingProps>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleProps>({
            query: (props) => ({
                url: '/article-ratings',
                method: 'POST',
                body: props,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
