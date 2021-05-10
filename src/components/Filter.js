import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/AutoComplete';
import Button from '@material-ui/core/Button';
import YearSlider from './filter-components/Slider';


const Filter = (props) => {

  return (
    //think about what will happen if they hit enter
    // <form onSubmit = {props.filterResults()} >
      <Grid container spacing={4}>
        <Grid item  sm={12} md={3}>
          <AutoComplete
            id="manufacturers"
            options={props.manufacturers}
            getOptionLabel={(option) => option.Mfr_Name}
            onChange={(e, value) => props.setManufacturerAndTypes(value)}
            renderInput={(params) => <TextField {...params} label="Car Maker" variant="outlined" />}
          />
        </Grid>
        <Grid item  sm={12} md={3}>
          <AutoComplete
            id="types"
            options={props.types}
            getOptionLabel={(option) => option.Name}
            onChange={(e, value) => props.setCarType(value)}
            renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
          />
        </Grid>
        <Grid item  sm={12} md={3}>
          <YearSlider
            id="year"
            setYear = {props.setYear}
          ></YearSlider>
        </Grid>
        <Grid item  sm={12} md={3}>
          <Button 
            type="submit"
            variant="contained" 
            onClick = {() => props.filterResults()}
          >Search Cars</Button>
        </Grid>
      </Grid>
    // </form>
  );
}

export default Filter;