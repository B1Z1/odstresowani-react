import { BlogPostDateClockIcon } from 'shared/ui/post-date/clock-icon/BlogPostDateClockIcon';
import { BlogPostDateProps } from 'shared/ui/post-date/BlogPostDateProps';
import { convertDateForPostDate } from 'shared/ui/post-date/utils/convertDateForPostDate';

export function BlogPostDate(props: BlogPostDateProps) {
  const {date} = props;
  const dateString: string = date.toDateString();
  const convertedDate: string = convertDateForPostDate(date);
  const dateIconClassName: string = props.dateIconClassName || '';

  return (
    <div className={ `${ props.className } ob-flex ob-items-center` }>
      <BlogPostDateClockIcon className={ `${ dateIconClassName } ob-w-4 ob-h-4 ob-mr-2` }/>
      <time dateTime={ dateString }>{ convertedDate }</time>
    </div>
  );
}
