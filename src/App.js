import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import TicketmasterState from './context/ticketmaster/TicketmasterState';
import AlertState from './context/alert/AlertState';
import NotFoundPage from './components/pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <TicketmasterState>
      <AlertState>
        <Router>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path='/about' component={About} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </TicketmasterState>
  );
}

export default App;
