export interface BlogPostImageFragment {
  alternativeText: string;
  id: string;
  name: string;
  url: string;
}

export interface BlogPostPreviewFragment {
  id: string;
  creation_date: string;
  preview_content: string;
  title: string;
  cover_image: BlogPostImageFragment;
}
