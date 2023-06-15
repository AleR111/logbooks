import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getAuthUserData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text: string, { extra, rejectWithValue, getState, dispatch }) => {
        const userData = getAuthUserData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                userId: userData.id,
                articleId: article.id,
                text,
            });
            if (!response.data) {
                throw new Error('error');
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
