import { HTMLAttributes } from 'react';
import {CustomLinkData} from "@globalx-solutions/shared/elements/link";

export interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  title: string;
  links: Array<CustomLinkData>;
}
