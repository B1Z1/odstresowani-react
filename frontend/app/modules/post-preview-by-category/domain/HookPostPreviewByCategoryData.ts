import { CardData } from 'app/components/elements/card/CardData';

export interface HookPostPreviewByCategoryData {
    previewPostsData: Array<CardData>;

    loadPostsData(startIndex: number): void;
}
