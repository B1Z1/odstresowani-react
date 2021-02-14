import { HTMLAttributes } from 'react';

export interface BlogPostDateProps extends HTMLAttributes<HTMLDivElement> {
  dateIconClassName?: string;
  date: Date;
}
