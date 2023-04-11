import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';

const reducers = {
    addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [text, onSendComment, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, [className])}>
                <Input
                    className={cls.input}
                    value={text ?? ''}
                    onChange={onCommentTextChange}
                    placeholder={t('Type comment')}
                />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
