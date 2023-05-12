import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: React.FC<OverlayProps> = (props) => {
    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cls.overlay, [className])} />
    );
};
