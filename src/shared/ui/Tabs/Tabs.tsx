import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CartTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const clickHandler = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={
                        tab.value === value
                            ? CartTheme.NORMAL
                            : CartTheme.OUTLINED
                    }
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
