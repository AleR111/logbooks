import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from '@/shared/assets/tests/avatar.webp';
import { CommentList } from './CommentList';

export default {
    title: 'entities/comments/CommentList',
    component: CommentList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'comment',
            user: {
                id: '1',
                username: 'user',
                avatar,
            },
        },
        {
            id: '2',
            text: 'comment2',
            user: {
                id: '2',
                username: 'user2',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
