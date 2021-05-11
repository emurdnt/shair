import Grid from '@material-ui/core/Grid';

const Empty = (props) => {
  
  return (
    <Grid 
    container  
    spacing={0}
    direction="column"
    className="result-container__empty">
    <Grid item  sm={12} md={12} >
      <p color="textPrimary" className = "message">
        {props.message}
      </p>
    </Grid>
  </Grid>
  );
}

export default Empty;