import load from '../../assets/load.gif'
import Grid from '@material-ui/core/Grid';


const Status = (props) => {
  return (
  <Grid 
    container  
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    className="result-container__status">
    <Grid item  sm={12} md={12} >
       <img
        src={load}
        alt="Loading"
      />
      <p color="textPrimary" className = "message">
        {props.message}
      </p>
    </Grid>
  </Grid>
  );
}

export default Status;