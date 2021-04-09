import {Card, CardData} from "@globalx-solutions/shared/elements/card";

export function getPostCardColumn(blogCardsData: CardData, index: number): JSX.Element {
    const isEven: boolean = index % 2 == 0;
    const paddingRight: string = isEven ? 'xl:ob-pr-8' : 'xl:ob-pl-8';

    return (
        <div key={ blogCardsData.id }
             className={ `ob-w-full xl:ob-w-1/2 ${ paddingRight } ob-pb-12 lg:ob-pb-16` }>
            <Card cardData={ blogCardsData }/>
        </div>
    );
}
