import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { CustomLinkBordered } from 'app/components/elements/link/bordered/CustomLinkBordered';

export function getLinkListItem(blogLinkData: CustomLinkData, index: number, isLast: boolean): JSX.Element {
    const marginRight: string = !isLast ? 'ob-mr-4' : '';

    return (
        <li key={ index }
            className={ `ob-mt-4 ${ marginRight }` }>
            <CustomLinkBordered href={ blogLinkData.href }>
                { blogLinkData.value }
            </CustomLinkBordered>
        </li>
    );
}
