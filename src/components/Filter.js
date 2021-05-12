import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import generateYears from '../helpers/Utilities';
import '../styles/filter.scss'


const Filter = (props) => {
  return (
    <form  onSubmit={props.onSearch} className="filter">
      <Grid>
        <Grid item  sm={12} md={12} >
          <Typography color="textPrimary" className = "heading">
            Search Our Car Inventory
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={3}>
          <AutoComplete
            id="manufacturers"
            options={props.manufacturers}
            getOptionLabel={(option) => option.Mfr_Name}
            onChange={(e, value) => props.setManufacturerAndTypes(value)}
            renderInput={(params) => <TextField {...params} required label="Car Maker" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <AutoComplete
            id="types"
            options={props.types}
            getOptionLabel={(option) => option.Name}
            onChange={(e, value) => props.setCarType(value)}
            renderInput={(params) => <TextField {...params} label="Car Type" variant="outlined" />}
          />
        </Grid>
        <Grid item  xs={12} sm={12} md={3}>
          {/* <YearSlider
            id="year"
            setYear = {props.setYear}
          ></YearSlider> */}
          <AutoComplete
            id="types"
            options={generateYears(2000)}
            getOptionLabel={(option) => option.value}
            onChange={(e, value) => props.setYear(value)}
            renderInput={(params) => <TextField {...params} label="Year" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Button 
            type="submit"
            variant="contained" 
          >Search Cars</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Filter;