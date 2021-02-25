import { CardData } from 'app/components/elements/card/CardData';
import { Card } from 'app/components/elements/card/Card';

export function getPostCardColumn(blogCardsData: CardData, index: number): JSX.Element {
    const isEven: boolean = index % 2 == 0;
    const paddingRight: string = isEven ? 'xl:ob-pr-16' : '';

    return (
        <div key={ blogCardsData.id }
             className={ `ob-w-full xl:ob-w-1/2 ${ paddingRight } ob-pb-16` }>
            <Card cardData={ blogCardsData }/>
        </div>
    );
}
