import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    value: 'item1',
    items: [
        { content: 'item1', value: 'item1' },
        { content: 'item2', value: 'item2' },
        { content: 'item3', value: 'item3' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'item1',
    items: [
        { content: 'item1', value: 'item1' },
        { content: 'item2', value: 'item2' },
        { content: 'item3', value: 'item3' },
    ],
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'item1',
    items: [
        { content: 'item1', value: 'item1' },
        { content: 'item2', value: 'item2' },
        { content: 'item3', value: 'item3' },
    ],
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'item1',
    items: [
        { content: 'item1', value: 'item1' },
        { content: 'item2', value: 'item2' },
        { content: 'item3', value: 'item3' },
    ],
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'item1',
    items: [
        { content: 'item1', value: 'item1' },
        { content: 'item2', value: 'item2' },
        { content: 'item3', value: 'item3' },
    ],
    direction: 'bottom right',
};
