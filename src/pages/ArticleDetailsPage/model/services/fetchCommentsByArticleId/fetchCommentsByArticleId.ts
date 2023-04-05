import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'article/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue }) => {
        if (!articleId) {
            rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
