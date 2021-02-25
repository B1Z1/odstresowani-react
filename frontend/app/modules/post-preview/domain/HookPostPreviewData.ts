import { CardData } from 'app/components/elements/card/CardData';

export interface HookPostPreviewData {
    previewPostsData: Array<CardData>;

    loadPostsData(startIndex: number): void;
}
