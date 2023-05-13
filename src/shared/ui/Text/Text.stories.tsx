import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'text',
    title: 'title',
};

export const Error = Template.bind({});
Error.args = {
    text: 'text',
    title: 'title',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    text: 'text',
    title: 'title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTitleDark.args = {
    title: 'title',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTextDark.args = {
    text: 'text',
};

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'text',
    title: 'title',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    text: 'text',
    title: 'title',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    text: 'text',
    title: 'title',
    size: TextSize.S,
};
