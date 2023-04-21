import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const Between = Template.bind({});
Between.args = {
    justify: 'between',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const StartColumn = Template.bind({});
StartColumn.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const ColumnCenter = Template.bind({});
ColumnCenter.args = {
    direction: 'column',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};

export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
    children: (
        <>
            <div>block1</div>
            <div>block2</div>
            <div>block3</div>
            <div>block4</div>
            <div>block5</div>
        </>
    ),
};
