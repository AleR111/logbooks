import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabItem } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleType
  onChangeType: (type: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs: React.FC<ArticleTypeTabsProps> = (props) => {
    const { className, type, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            { value: ArticleType.ALL, content: t('All') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.ECONOMICS, content: t('Economics') },
            { value: ArticleType.SCIENCE, content: t('Science') },
        ],
        [t],
    );

    return (

        <Tabs
            className={classNames('', [className])}
            value={type}
            onTabClick={onChangeType}
            tabs={typeTabs}
        />

    );
};
