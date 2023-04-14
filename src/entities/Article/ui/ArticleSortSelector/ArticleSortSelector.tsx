import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> = (
    props,
) => {
    const {
        className, sort, order, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            { content: t('ascending'), value: 'asc' },
            { content: t('descending'), value: 'desc' },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            { content: t('creation date'), value: ArticleSortField.CREATED },
            { content: t('views'), value: ArticleSortField.VIEWS },
            { content: t('title'), value: ArticleSortField.TITLE },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.articleSortSelector, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                label={t('Sort by')}
                options={sortFieldOptions}
            />
            <Select
                className={cls.order}
                value={order}
                onChange={onChangeOrder}
                label={t('by')}
                options={orderOptions}
            />
        </div>
    );
};
