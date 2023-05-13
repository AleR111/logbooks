import { DropDownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClasses: Record<DropDownDirection, string> = {
    'top right': cls.optionsTopRight,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'bottom left': cls.optionsBottomLeft,
};
