import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
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

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        key,
        index,
        isScrolling,
        isVisible,
        style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[index]}
                    view={view}
                    target={target}
                    key={articles[index].id}
                />,
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>
                {items}
            </div>
        );
    };
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
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                scrollTop,
                isScrolling,
                onChildScroll,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.articleList, [
                        className,
                        cls[view],
                    ])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>

    // <div className={classNames(cls.articleList, [className, cls[view]])}>
    //     {articles.length ? articles.map(renderArticle) : null}
    //     {isLoading && getSkeletons(view)}
    // </div>
    );
};
