import './App.scss';
import hero from './assets/hero.jpg'
import logo from './assets/logo.png'

import useApplicationData from "./hooks/UseApplicationData";
import useVisualMode from "./hooks/UserVisualMode";
import Filter from "./components/Filter";
import Result from "./components/Result";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const LOADING = "SAVING";
const ERROR_FETCH = "ERROR_FETCH";

const App = () => {

  const {
    state,
    setManufacturerAndTypes,
    setCarType,
    setYear,
    filterResults
  } = useApplicationData();

  const { mode, transition} = useVisualMode(
    state.results ? SHOW : EMPTY
  );


  const onSearch = (e) => {
    e.preventDefault();
    transition(LOADING);

    filterResults()
      .then((response) => {

        if(response.data.Count < 1){
          transition(EMPTY)
        } else {
          transition(SHOW)
        }

      })
      .catch((error) => transition(ERROR_FETCH))

  }

  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={12} className="hero">
          <div className="menu">
            <img src={logo} alt="Shair logo"/>
          </div>
          <div className="hero-heading">
            <p className="tagline">Search Our Car Inventory</p>
            <p>SHAiR is the online car sharing platform that empowers vehicle owners to put their car to work for them and take charge of their financial well-being.</p>
          </div>
          <div className="overlay">
            <img
              src= {hero}
              alt="Shair Your Car"
            />
          </div>
        </Grid>
        <Grid item  sm={12} md={12}>
          <Container maxWidth="md">
            <Filter
              manufacturers = {state.manufacturers}
              types = {state.types}
              setManufacturerAndTypes = {setManufacturerAndTypes}
              setCarType = {setCarType}
              setYear = {setYear}
              onSearch = {onSearch}
            />
          </Container>
        </Grid>
        <Grid item  sm={12} md={12}>
          <Container maxWidth="md">
            <Result 
            results = {state.results}
            mode = {mode}
          />
          </Container>
        </Grid>
      </Grid>
    </main>
   
  );
}

export default App;
