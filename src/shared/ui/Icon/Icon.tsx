import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: React.FC<IconProps> = memo((props) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.icon, [className])} />
    );
});
