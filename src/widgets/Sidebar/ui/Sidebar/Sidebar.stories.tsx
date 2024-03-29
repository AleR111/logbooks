import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({ user: { authData: {} } })];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];
Dark.args = {};

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({})];
NoAuth.args = {};
