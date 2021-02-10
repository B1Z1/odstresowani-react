import { BlogPostPreviewFragment } from 'shared/api/fragments/post-preview/domain/BlogPostPreviewFragment';

export interface BlogPostPreviewQueryResponse {
  category: {
    posts: Array<BlogPostPreviewFragment>;
  }
}
