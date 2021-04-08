import {PostDateProps} from "./post-date-props";
import {convertDateForPostDate} from "./utils/convert-date-for-post-date";
import {PostDateClockIcon} from "./clock-icon/post-date-clock-icon";

export function PostDate(props: PostDateProps) {
  const {date} = props;
  const dateString: string = date.toDateString();
  const convertedDate: string = convertDateForPostDate(date);
  const dateIconClassName: string = props.dateIconClassName || '';

  return (
    <div className={ `${ props.className } ob-flex ob-items-center` }>
      <PostDateClockIcon className={ `${ dateIconClassName } ob-w-4 ob-h-4 ob-mr-2` }/>
      <time dateTime={ dateString }>{ convertedDate }</time>
    </div>
  );
}
