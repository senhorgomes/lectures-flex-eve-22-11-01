import { storiesOf } from '@storybook/react';
import Counter from '../components/Counter';
// A string: what is this story about?
// storiesOf('Counter')
//     .add('With Heading', () => {
//         return <Counter header="Example Heading" defaultClicks={0} />;
//     })
//     .add('Without Heading', () => {
//         return <Counter defaultClicks={0}/>;
//     })
//     .add('Without Heading And Clicks', () => {
//         return <Counter/>;
//     });

export default {
    title: 'Counter',
    component: Counter
};

const Template = args => <Counter {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {header: 'Example Heading', defaultClicks: 0};

export const WithoutHeading = Template.bind({});
WithoutHeading.args = {defaultClicks: 0};

export const WithoutHeadingAndClicks = Template.bind({});
WithoutHeadingAndClicks.args = {};
