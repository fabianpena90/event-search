import { useContext } from 'react'
import TicketmasterContext from '../../context/ticketmaster/ticketmasterContext'
import Spinner from '../layout/Spinner'

const Events = () => {
  const ticketmasterContext = useContext(TicketmasterContext)
  const { events, loading } = ticketmasterContext

  return loading ? <Spinner /> : (
    <div className="pt-5 text-center" style={userStyle}>
      {events.map(event => (
        <div className="card-group" key={event.id}>
          <div className="card">
            <img src={event.images[2].url} alt={event.name} class="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <a href={event.url}>More info...</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Events
