import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: React.FC<VStackProps> = (props) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" align={align} />;
};
