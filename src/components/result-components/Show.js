import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Show = (props) => {
  return (
    <Grid container spacing={2} className="result-container__show">
      <Grid item  sm={12} md={12} >
        <Typography color="textPrimary" className = "result-count">
          {props.results.length} Results
        </Typography>
      </Grid>
     {props.results.map((car) => {
        return(
        <Grid item  sm={12} md={4} key={car['Model_ID']}>
          <Card variant="outlined">
            <CardContent className="result">
                <div className="container">
                  <img src="https://i2.wp.com/d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/626/2021/03/11173545/2020_10_27_JLRNA_LandRover_Inventory_Placeholder_Image-1.jpg?ssl=1" alt="covered car"/>
                </div>
                <Typography color="textPrimary">
                {car['Make_Name']} - {car['Model_Name']}
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        )
      })}
    </Grid>
  );
}

export default Show;

