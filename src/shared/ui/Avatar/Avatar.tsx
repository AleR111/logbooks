import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string
    className?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, src, size, alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, [className])}
        />
    );
};
