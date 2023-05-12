import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const { theme } = useTheme();
    const { isMounted, isClosing, close } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(
                    cls.drawer,
                    [className, theme, 'app_drawer'],
                    mods,
                )}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
