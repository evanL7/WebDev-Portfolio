import './Card.css';
import locationSymbol from '../../assets/location.svg'

function Card(props) {
    const currentCard = props.cardItem;
    return (
        <div className="card">
            <img className='card--img' src={currentCard.imageUrl} alt={currentCard.title} />
            <section className="card--content">
                <div className='card--location'>
                    <img src={locationSymbol} alt="location symbol" />
                    <h4 className='card--location--text'>
                        <span className='country--name'>{currentCard.location}</span>
                        <a href={currentCard.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </h4>
                </div>
                <h2 className='card--title'>{currentCard.title}</h2>
                <h5 className='card--date'>{currentCard.startDate} - {currentCard.endDate}</h5>
                <p className='card--desc'>{currentCard.description}</p>
            </section>
        </div>
    )
}

export default Card