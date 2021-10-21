import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import History from './Pages/History'
import Leaderboard from './Pages/Leaderboard';
import AboutUs from './Pages/AboutUs';
import Ingame_weekNumber from './components/Ingame_weekNumber'


function App() {
  console.log(`The week number of the current date (${Ingame_weekNumber().currentdate}) is ${Ingame_weekNumber().ingame_weeknumber}.`);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/signIn'>
            <Auth />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/Leaderboard'>
            <Leaderboard />
          </Route>
          <Route path='/AboutUs'>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
