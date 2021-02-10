import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { BlogLinkBordered } from 'shared/ui/link/bordered/BlogLinkBordered';

export function getLinkListItem(blogLinkData: BlogLinkData, index: number, isLast: boolean): JSX.Element {
  const marginRight: string = !isLast ? 'ob-mr-4' : '';

  return (
    <li key={ index }
        className={ `ob-mt-4 ${ marginRight }` }>
      <BlogLinkBordered { ...blogLinkData } />
    </li>
  );
}
