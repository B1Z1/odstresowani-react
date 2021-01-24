import { SpacingSize } from 'shared/styles/ui/spacing/domain/SpacingSize';

export type SpacingFn = (spacingSize: SpacingSize) => () => string;
