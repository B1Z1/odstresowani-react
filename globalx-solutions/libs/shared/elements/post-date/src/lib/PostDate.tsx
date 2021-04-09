import {PostDateProps} from "./PostDateProps";
import {convertDateForPostDate} from "./utils/convertDateForPostDate";
import {PostDateClockIcon} from "./clock-icon/PostDateClockIcon";

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
