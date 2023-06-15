import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import { ArticleRating } from '@/features/ArticleRating';

const reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} remoteAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, [className])}>
                <ArticleDetailsPageHeader />
                <VStack gap="16" max>
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsPageComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
