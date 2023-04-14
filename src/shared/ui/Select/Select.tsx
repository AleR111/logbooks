import {
    ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option value={opt.value} className={cls.option}>
                {opt.content}
            </option>
        )),
        [options],
    );

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value as T);
        },
        [onChange],
    );

    return (
        <div className={classNames(cls.wrapper, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
