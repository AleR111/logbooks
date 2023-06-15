import { FC, Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClasses } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export const ListBox: FC<ListBoxProps> = (props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const classes = [mapDirectionClasses[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.listBox, [className, popupCls.popup])}
            >
                <HListbox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>{value || defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, classes)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, [], {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
