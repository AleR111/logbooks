/* eslint-disable check-imports-plugin/layer-imports */
import { Story } from '@storybook/react';
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
