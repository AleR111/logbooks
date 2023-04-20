import { ArticleDetails, ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import {
    fetchArticlesRecommendations,
} from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleCommentsIsLoading);

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommendations());
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, [className])}>
                {t('Article is not define')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} remoteAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title={t('Recommendations')}
                    className={cls.commentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    title={t('Comments')}
                    className={cls.commentTitle}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
