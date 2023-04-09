import { ArticleDetails } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

const reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(`${RoutePath.article_details}`);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, [className])}>
                {t('Article is not define')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} remoteAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Back to list')}</Button>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
