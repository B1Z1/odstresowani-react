import {
  PostContent,
  PostContentPropsMarkdown,
  PostContentType,
} from '@globalx-solutions/modules/post';
import ReactMarkdown from 'react-markdown';
import styles from './PostContentMarkdown.module.scss';

function getPostContent(postContent: PostContent, index: number): JSX.Element {
  switch (postContent.__typename) {
    case PostContentType.BANNER: {
      const imageUrl = `/api/${postContent.image.url}`;
      return (
        <figure
          key={index}
          className="ob-relative ob-w-full ob-h-screen ob-mb-16"
        >
          <img
            className="ob-object-cover ob-w-full ob-h-full"
            src={imageUrl}
            alt={postContent.image.alternativeText}
          />
        </figure>
      );
    }
    case PostContentType.TEXT: {
      return (
        <div
          key={index}
          className={`ob-relative
                                xl:ob-px-4 ob-mx-auto ob-mb-16
                                ${styles['ob-post-content-markdown__content-container']}`}
        >
          <ReactMarkdown
            className={`ob-text-lg xl:ob-text-xl ${styles['ob-post-content-markdown__markdown-content']}`}
            disallowedTypes={['image']}
            source={postContent.content}
          />
        </div>
      );
    }
  }
}

export function PostContentMarkdown({ content }: PostContentPropsMarkdown) {
  const convertedContent: Array<JSX.Element> = content.map(getPostContent);

  return <>{convertedContent}</>;
}
