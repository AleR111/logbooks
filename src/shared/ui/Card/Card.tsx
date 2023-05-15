import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CartTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CartTheme;
    max?: boolean;
}

export const Card: React.FC<CardProps> = memo((props) => {
    const {
        className,
        children,
        theme = CartTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, [className, cls[theme]], {
                [cls.max]: max,
            })}
            {...otherProps}
        >
            {children}
        </div>
    );
});
