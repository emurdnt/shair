import './App.scss';
import hero from './assets/hero.jpg'
import logo from './assets/logo.png'

import useApplicationData from "./hooks/UseApplicationData";
import Filter from "./components/Filter";
import Result from "./components/Result";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const App = () => {

  const {
    state,
    // setResult,
    setManufacturerAndTypes,
    setCarType,
    setYear,
    filterResults
    //need a method to call API here
  } = useApplicationData();

  return (
    <main>
    <Grid container spacing={3}>
      <Grid item xs={12} className="hero">
        <div className="menu">
          <img src={logo} alt="Shair logo"/>
        </div>
        <div className="hero-heading">
          <p className="tagline">How Much Money Can Your Car Make?</p>
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
            filterResults = {filterResults}
            //send method to call API to filter when the search is clicked
          />
        </Container>
      </Grid>
      <Grid item  sm={12} md={12}>
        <Container maxWidth="md">
          <Result results = {state.results}/>
        </Container>
      </Grid>
    </Grid>
  </main>
   
  );
}

export default App;
