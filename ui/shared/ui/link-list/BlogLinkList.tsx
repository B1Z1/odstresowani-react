import { BlogLinkListProps } from 'shared/ui/link-list/BlogLinkListProps';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { getLinkListItem } from 'shared/ui/link-list/utils/getLinkListItem';

export function BlogLinkList(props: BlogLinkListProps) {
  const className: string = props.className || '';
  let linkItems: Array<JSX.Element> = [];

  if (props && props.links) {
    linkItems = mapWithLast(props.links, getLinkListItem);
  }

  return (
    <ul className={ `${ className } ob-flex ob-flex-wrap ob-items-center` }>
      <li className="ob-mt-4 ob-mr-4 ob-text-secondary">{ props.title }</li>
      { linkItems }
    </ul>
  );
}
