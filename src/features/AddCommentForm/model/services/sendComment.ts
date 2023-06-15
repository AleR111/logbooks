import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getAuthUserData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (_, { extra, rejectWithValue, getState, dispatch }) => {
        const userData = getAuthUserData(getState());
        const text = getAddCommentFormText(getState());
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

            dispatch(addCommentFormActions.setText(''));

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
