import { FooterSocialMediaItemData } from 'app/components/modules/footer/ui/social-media-list/FooterSocialMediaItemData';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getSocialMediaItem(value: FooterSocialMediaItemData, index: number, isLast: boolean): JSX.Element {
  const marginRight: string = !isLast ? 'ob-mr-6' : '';

  return (
    <li key={ index } className={ marginRight }>
      <Link href={ value.href }>
        <a className="ob-block ob-w-6 hover:ob-opacity-50 ob-transition-opacity">
          <FontAwesomeIcon icon={ value.icon }/>
        </a>
      </Link>
    </li>
  );
}
