export interface ApiPostPreviewImageFragment {
    id: string;
    url: string;
    alternativeText: string;
}

export interface ApiPostPreviewFragment {
    id: string;
    title: string;
    slug: string;
    preview_content: string;
    creation_date: string;
    cover_image: ApiPostPreviewImageFragment;
}
