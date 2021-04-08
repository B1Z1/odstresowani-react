import { HTMLAttributes } from 'react';
import {CustomLinkData} from "../link/CustomLinkData";

export interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  title: string;
  links: Array<CustomLinkData>;
}
