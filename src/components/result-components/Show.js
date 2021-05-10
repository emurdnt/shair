import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Show = (props) => {
  return (
    <Grid container spacing={3}>
     {props.results.map((car) => {
        return(
        <Grid item  sm={12} md={6} key={car['Model_ID']}>
          <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                {car['Model_ID']}
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

