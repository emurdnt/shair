import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const YearSlider = (props) => {

  return (
    <div>
      <Typography id="year-slider" gutterBottom>
       Year
      </Typography>
      <Slider
        defaultValue = {0}
        onChangeCommitted = {(e, value) => props.setYear(value)}
        aria-labelledby = "year-slider"
        step = {1}
        marks
        min = {2000}
        max = {new Date().getFullYear()}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export default YearSlider;