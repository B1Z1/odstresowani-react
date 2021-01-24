import { createSpacing } from 'shared/styles/ui/spacing/util/createSpacing';
import { SpacingFn } from 'shared/styles/ui/spacing/domain/SpacingFn';

const m: SpacingFn = createSpacing(['margin']);
const mx: SpacingFn = createSpacing(['margin-left', 'margin-right']);
const my: SpacingFn = createSpacing(['margin-top', 'margin-bottom']);
const mt: SpacingFn = createSpacing(['margin-top']);
const mr: SpacingFn = createSpacing(['margin-right']);
const mb: SpacingFn = createSpacing(['margin-bottom']);
const ml: SpacingFn = createSpacing(['margin-left']);

export {
  mx,
  my,
  m,
  mt,
  mr,
  mb,
  ml
};
