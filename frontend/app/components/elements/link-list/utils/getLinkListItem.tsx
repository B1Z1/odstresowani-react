import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { LinkBordered } from 'app/components/elements/link/bordered/LinkBordered';

export function getLinkListItem(blogLinkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
  const marginRight: string = !isLast ? 'ob-mr-4' : '';

  return (
    <li key={ index }
        className={ `ob-mt-4 ${ marginRight }` }>
      <LinkBordered { ...blogLinkData } />
    </li>
  );
}
