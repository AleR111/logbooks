import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: React.FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article?.id]);

    return (
        <div
            className={classNames(cls.articleDetailsPageHeader, [
                className,
            ])}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </div>
    );
};
