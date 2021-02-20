import { FooterColumnEmpty } from 'app/components/modules/footer/ui/column/domain/column-types/FooterColumnEmpty';
import { FooterColumnWithTitle } from 'app/components/modules/footer/ui/column/domain/column-types/FooterColumnWithTitle';
import { FooterColumnWithoutTitle } from 'app/components/modules/footer/ui/column/domain/column-types/FooterColumnWithoutTitle';

export type FooterColumnData = FooterColumnEmpty | FooterColumnWithTitle | FooterColumnWithoutTitle;
