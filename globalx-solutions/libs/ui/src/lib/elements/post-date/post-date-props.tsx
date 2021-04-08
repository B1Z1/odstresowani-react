import { HTMLAttributes } from 'react';

export interface PostDateProps extends HTMLAttributes<HTMLDivElement> {
  dateIconClassName?: string;
  date: Date;
}
