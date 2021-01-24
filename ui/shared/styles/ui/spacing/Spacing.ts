import styled from 'styled-components';
import { SpacingProps } from 'shared/styles/ui/spacing/domain/SpacingProps';
import { allSpacings } from 'shared/styles/ui/spacing/util/allSpacings';
import { SpacingSize } from 'shared/styles/ui/spacing/domain/SpacingSize';
import { SpacingFn } from 'shared/styles/ui/spacing/domain/SpacingFn';

export const Spacing = styled.div`
  ${ (props: SpacingProps) => {
    return Object.keys(props)
      .filter((spacingKey: string) => !!allSpacings[spacingKey])
      .map((spacingKey: string) => {
        const spacingFn: SpacingFn = allSpacings[spacingKey];
        const spacingSize: SpacingSize = props[spacingKey];

        return spacingFn(spacingSize);
      });
  } };
`;
