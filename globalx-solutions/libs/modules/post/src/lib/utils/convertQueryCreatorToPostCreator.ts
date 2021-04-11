import { ApiCreatorFragment } from '@globalx-solutions/api';
import { PostCreator } from '@globalx-solutions/modules/post';

export function convertQueryCreatorToPostCreator(
  queryCreator: ApiCreatorFragment
): PostCreator {
  return {
    name: queryCreator.username,
    avatarUrl: `/api/${queryCreator.avatar.url}`,
    description: queryCreator.description,
  };
}
