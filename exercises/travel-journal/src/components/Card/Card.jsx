import './Card.css';
import locationSymbol from '../../assets/location.svg'

function Card(props) {
    return (
        <div className="card">
            <img className='card--img' src={props.imageUrl} alt={props.title} />
            <section className="card--content">
                <div className='card--location'>
                    <img src={locationSymbol} alt="location symbol" />
                    <h4 className='card--location--text'>
                        <span className='country--name'>{props.location}</span>
                        <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </h4>
                </div>
                <h2 className='card--title'>{props.title}</h2>
                <h5 className='card--date'>{props.startDate} - {props.endDate}</h5>
                <p className='card--desc'>{props.description}</p>
            </section>
        </div>
    )
}

export default Card