import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from '@/shared/assets/tests/avatar.webp';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/comments/CommentCard',
    component: CommentCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'comment',
        user: {
            id: '1',
            username: 'user',
            avatar,
        },
    },
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
