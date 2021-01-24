import styled from 'styled-components';
import { ColumnProps } from 'shared/styles/ui/column/domain/ColumnProps';
import { getColumnSize } from 'shared/styles/ui/column/utils/getColumnSize';
import { px } from 'shared/styles/ui/spacing/util/paddingSpacing';
import { SpacingSize } from 'shared/styles/ui/spacing/domain/SpacingSize';
import { Spacing } from 'shared/styles/ui/spacing/Spacing';

export const Column = styled(Spacing)`
  position: relative;
  flex: 0 0 ${ (props: ColumnProps) => getColumnSize(props) };
  max-width: ${ (props: ColumnProps) => getColumnSize(props) };
  ${ (props: ColumnProps) => !props.noGap && px(SpacingSize.TWO) }
`;

