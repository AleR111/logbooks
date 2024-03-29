import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> =
    memo((props) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.articleTextBlockComponent, [
                    className,
                ])}
            >
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    });
