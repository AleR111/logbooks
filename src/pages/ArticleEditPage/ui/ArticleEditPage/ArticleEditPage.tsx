import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: React.FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.articleEditPage, [className])}>
            {
                isEdit ? `edit${id}` : 'new'
            }
        </div>
    );
};

export default ArticleEditPage;
