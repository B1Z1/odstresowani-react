import { SpacingSize } from 'shared/styles/ui/spacing/domain/SpacingSize';
import { SpacingFn } from 'shared/styles/ui/spacing/domain/SpacingFn';

export const createSpacing: (parameters: Array<string>) => SpacingFn = (parameters: Array<string>) => (spacingSize: SpacingSize) => () => {
  return parameters
    .map((param: string) => `${ param }: ${ spacingSize }px;`)
    .join('');
};
