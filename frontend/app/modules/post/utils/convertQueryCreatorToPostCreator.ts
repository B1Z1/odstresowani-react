import { PostCreator } from 'app/modules/post/domain/PostCreator';
import { ApiCreatorFragment } from 'app/api/fragments/creator/ApiCreatorFragment';

export function convertQueryCreatorToPostCreator(queryCreator: ApiCreatorFragment): PostCreator {
    return {
        name: queryCreator.username,
        avatarUrl: `/api/${ queryCreator.avatar.url }`,
        description: queryCreator.description
    };
}
