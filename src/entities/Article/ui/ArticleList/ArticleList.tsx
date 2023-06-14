import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/consts';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton
            key={index}
            className={cls.card}
            view={view}
        />
    ));

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.articleList, [className, cls[view]])}
            >
                <Text title={t('Articles not found')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div data-testid="ArticleList" className={classNames(cls.articleList, [className, cls[view]])}>
            {articles.map((article) => (
                <ArticleListItem
                    className={cls.card}
                    article={article}
                    view={view}
                    target={target}
                    key={article.id}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>

    // <div className={classNames(cls.articleList, [className, cls[view]])}>
    //     {articles.length ? articles.map(renderArticle) : null}
    //     {isLoading && getSkeletons(view)}
    // </div>
    );
};
