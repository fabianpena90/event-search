import React, { useContext, useState } from 'react'
import TicketmasterContext from '../../context/ticketmaster/ticketmasterContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const [text, setText] = useState('');
  const ticketmasterContext = useContext(TicketmasterContext)
  const alertContext = useContext(AlertContext)
  const { searchEvents, clearEvents } = ticketmasterContext;
  const { setAlert } = alertContext;

  const onChange = (e) => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      return setAlert('Please enter a search term');
    } else {
    searchEvents(text);
    setText('');
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          className="form-control mt-5" 
          name="text" 
          placeholder="Search Events..." 
          value={text} 
          onChange={onChange} 
        />
        <div className="d-grid gap-2 mt-2">
          <button type="submit" value="Search" className="btn btn-info">Search</button>
        </div>
      </form>
        <div className="d-grid gap-2 mt-2">
        {searchEvents.length > 0 && <button 
            className="btn btn-danger"
            onClick={clearEvents}
          >Clear</button>}
        </div>
    </div>
  )
}

export default Search
