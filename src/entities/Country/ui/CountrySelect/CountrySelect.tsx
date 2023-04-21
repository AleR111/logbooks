import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (currency: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Serbia, content: Country.Serbia },
    { value: Country.Spain, content: Country.Spain },
    { value: Country.Turkish, content: Country.Turkish },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', [className])}
            items={options}
            label={t('Select country')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );
});
