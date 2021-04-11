import { CardData } from '@globalx-solutions/shared/elements/card';

export interface HookPostPreviewByCategoryData {
  previewPostsData: Array<CardData>;

  loadPostsData(startIndex: number): void;
}
