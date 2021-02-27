import { CardProps } from 'app/components/elements/card/CardProps';
import { PostDate } from 'app/components/elements/post-date/PostDate';
import { CardSignatureBadge } from 'app/components/elements/card/signature-badge/CardSignatureBadge';
import Link from 'next/link';
import styles from 'app/components/elements/card/Card.module.scss';

export function Card(props: CardProps) {
    const {cardData} = props;
    const {imageData} = cardData;
    const className = props.className || '';

    return (
        <Link href={ cardData.href }>
            <a className={ `${ className } ob-relative ob-flex ob-flex-col ob-w-full` }>
                <figure className="ob-relative ob-w-full
                                   ob-h-40 sm:ob-h-60 xl:ob-h-80
                                   ob-pointer-events-none">
                    <PostDate date={ cardData.date }
                              dateIconClassName="ob-fill-secondary"
                              className="ob-absolute
                                   ob-top-4 xl:ob-top-8 ob-left-4 xl:ob-left-8
                                   ob-z-10 ob-text-secondary"/>

                    <img src={ imageData.src }
                         alt={ imageData.alt }
                         title={ imageData.title }
                         className="ob-w-full ob-h-full ob-object-cover"/>

                    <CardSignatureBadge className="ob-absolute ob-bottom-0 ob-left-1/2
                                           ob-transform ob--translate-x-1/2 ob-translate-y-1/2
                                           ob-z-10"/>
                </figure>

                <div className="ob-p-4 xl:ob-p-8 ob-text-center">
                    <h3 className={ `${ styles['ob-blog-card__title'] }
                          ob-text-xl sm:ob-text-2xl xl:ob-text-3xl
                          ob-mb-2 xl:ob-mb-8
                          xl:ob-h-28` }>
                        { cardData.title }
                    </h3>

                    <p className="ob-text-base xl:ob-text-2xl">
                        { cardData.description }
                    </p>
                </div>
            </a>
        </Link>
    );
}
