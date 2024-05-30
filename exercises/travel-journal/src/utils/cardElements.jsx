import Card from '../components/Card/Card';
import data from '../data.jsx';

const cardElements = data.map((card, index) => {
    return (
        <>
            <Card 
                key={index}
                {...card}
            />
            <hr />
        </>
    )
})

export default cardElements;