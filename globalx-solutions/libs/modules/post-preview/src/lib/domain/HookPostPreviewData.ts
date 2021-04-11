import { CardData } from '@globalx-solutions/shared/elements/card';

export interface HookPostPreviewData {
  previewPostsData: Array<CardData>;

  loadPostsData(startIndex: number): void;
}
