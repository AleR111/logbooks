import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'test',
                age: 23,
                country: Country.USA,
                city: 'LA',
                currency: Currency.USD,
                first: 'test',
                lastname: 'test',
            },
        },
    }),
];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'test',
                age: 23,
                country: Country.USA,
                city: 'LA',
                currency: Currency.USD,
                first: 'test',
                lastname: 'test',
            },
        },
    }),
];
Dark.args = {};
