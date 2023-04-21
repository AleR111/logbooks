import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    value?: string;
    content?: string;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClasses: Record<DropDownDirection, string> = {
    'top right': cls.optionsTopRight,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'bottom left': cls.optionsBottomLeft,
};

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <Menu as="div" className={classNames(cls.dropdown, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, classes)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, [], {
                                [cls.active]: active,
                            })}
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.value}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            key={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
