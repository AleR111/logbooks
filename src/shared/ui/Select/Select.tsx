import {
    ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option className={cls.option}>{opt.content}</option>
        )),
        [options],
    );

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
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
});
