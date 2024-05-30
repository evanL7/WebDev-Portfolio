import Card from '../components/Card/Card';
import data from '../data';

const cardElements = data.map((card, index) => {
    return (
        <>
            <Card 
                key={index}
                cardItem = {card}
                // {...card}
            />
            <hr />
        </>
    )
})

export default cardElements;