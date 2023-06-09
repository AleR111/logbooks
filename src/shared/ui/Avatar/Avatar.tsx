import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import AvatarIcon from '../../assets/icons/avatar-fallback.svg';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string;
    className?: string;
    fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, src, size = 100, alt, fallbackInverted,
    } = props;

    const styles = useMemo<CSSProperties>(
        () => ({ width: size, height: size }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            Svg={AvatarIcon}
            width={size}
            height={size}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, [className])}
        />
    );
};
