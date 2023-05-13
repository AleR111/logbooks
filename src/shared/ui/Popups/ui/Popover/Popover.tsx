import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClasses } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <HPopover
            className={classNames(cls.popover, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, classes)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
