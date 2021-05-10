import './App.css';


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
      <Grid item xs={12}>
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Shair Your Car"
        />
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
