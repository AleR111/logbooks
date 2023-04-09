import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

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
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const {
        className, articles, isLoading, view = ArticleView.SMALL,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.articleList, [className, cls[view]])}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.articleList, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    );
};
