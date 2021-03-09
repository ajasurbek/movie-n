import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
  Home, 
  Movies,
  SingleMovie,
  SingleShow,
  TvShow,
  SingleTopRated,
  TopRated,
  UpComing,
  SingleUpComing
} from './pages'

import './assets/styles/main.scss'
import Header from './containers/Header'

function App() {
  return (
    <>
    <Router>
      <Header />
    <Switch>
    <Route exact path='/' component={Home} /> 
    <Route exact path='/movies' component={Movies} /> 
    <Route exact path='/latestMovies' component={TopRated} /> 
    <Route exact path='/tvshows' component={TvShow} /> 
    <Route exact path='/upcoming' component={UpComing} /> 
    <Route exact path='/upcoming/:id' component={SingleUpComing} /> 
    <Route exact path='/movie/:id' component={SingleMovie} /> 
    <Route exact path='/tvshow/:id' component={SingleShow} /> 
    <Route exact path='/latestMovie/:id' component={SingleTopRated} /> 
    </Switch>
    </Router>
    </>
    );
  }
  
  export default App;
  