import { ColumnSize } from 'shared/styles/ui/column/domain/ColumnSize';
import { ColumnProps } from 'shared/styles/ui/column/domain/ColumnProps';

export function getColumnSize(columnProps: ColumnProps): ColumnSize {
  if (columnProps.one) return ColumnSize.ONE;
  if (columnProps.two) return ColumnSize.TWO;
  if (columnProps.three) return ColumnSize.THREE;
  return ColumnSize.FOUR;
}
