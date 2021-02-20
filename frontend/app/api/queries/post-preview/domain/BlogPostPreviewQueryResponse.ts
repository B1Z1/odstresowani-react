import { BlogPostPreviewFragment } from 'app/api/fragments/post-preview/domain/BlogPostPreviewFragment';

export interface BlogPostPreviewQueryResponse {
  category: {
    posts: Array<BlogPostPreviewFragment>;
  }
}
