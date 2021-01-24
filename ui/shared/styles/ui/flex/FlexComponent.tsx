import styled from 'styled-components';
import { FlexProps } from 'shared/styles/ui/flex/FlexProps';
import { Spacing } from 'shared/styles/ui/spacing/Spacing';

export const Flex = styled(Spacing)`
  display: flex;
  flex-wrap: ${ (props: FlexProps) => {
    if (props.noWrap) return 'nowrap';
    return 'wrap';
  } };

  justify-content: ${ (props: FlexProps) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    return 'flex-start';
  } };

  align-items: ${ (props: FlexProps) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignCenter) return 'center';
    if (props.alignEnd) return 'flex-end';
    return 'flex-start';
  } };
`;
