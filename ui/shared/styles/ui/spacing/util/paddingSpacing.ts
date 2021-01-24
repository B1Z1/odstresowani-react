import { createSpacing } from 'shared/styles/ui/spacing/util/createSpacing';
import { SpacingFn } from 'shared/styles/ui/spacing/domain/SpacingFn';

const p: SpacingFn = createSpacing(['padding']);
const px: SpacingFn = createSpacing(['padding-left', 'padding-right']);
const py: SpacingFn = createSpacing(['padding-top', 'padding-bottom']);
const pt: SpacingFn = createSpacing(['padding-top']);
const pr: SpacingFn = createSpacing(['padding-right']);
const pb: SpacingFn = createSpacing(['padding-bottom']);
const pl: SpacingFn = createSpacing(['padding-left']);

export {
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl
};
