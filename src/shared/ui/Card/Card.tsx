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
}

export const Card: React.FC<CardProps> = memo((props) => {
    const {
        className,
        children,
        theme = CartTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
