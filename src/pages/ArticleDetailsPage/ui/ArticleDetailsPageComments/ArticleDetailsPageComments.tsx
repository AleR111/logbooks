import { useTranslation } from 'react-i18next';
import { Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsPageCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsPageComments: React.FC<
    ArticleDetailsPageCommentsProps
> = (props) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // dispatch(fetchArticlesRecommendations());
    });

    return (
        <VStack gap="16" max>
            <Text size={TextSize.L} title={t('Comments')} />

            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>

            <CommentList comments={comments} isLoading={commentsLoading} />
        </VStack>
    );
};
