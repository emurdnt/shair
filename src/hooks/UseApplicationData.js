import { useReducer, useEffect } from "react";
import axios from "axios";
import {
  reducer,
  SET_RESULTS,
  SET_APPLICATION_DATA,
  FILTER_RESULTS,
  SET_CAR_TYPES,
  SET_SELECTED_MANUFACTURER,
  SET_SELECTED_CAR_TYPE,
  SET_SELECTED_YEAR
} from "../reducer/ApplicationReducer";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    results: [],
    manufacturers:[],
    types:[],
    selectedManufacturer:'',
    selectedCarType:'',
    selectedYear:''
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
    Promise.all([
      axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json"),
      axios.get("https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/honda?format=json"),
     
    ]).then((all) => {
      // console.log("all from applicatin data hook: ", all);
      const manufacturers = all[0].data["Results"];
      const results = all[1].data["Results"];
      dispatch({
        type: SET_APPLICATION_DATA,
        results,
        manufacturers
      });
    });
  }, []);


  const filterResults = () => {
    let apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/'

    if(state.selectedManufacturer !== '' && state.selectedCarType === '' && state.selectedYear === ''){
      apiUrl += `${state.selectedManufacturer}`;
    } else if (state.selectedManufacturer !== '' && (state.selectedCarType === '' || state.selectedYear === '')){
      apiUrl += `make/${state.selectedManufacturer}`;
    }

     //what if they wanna reset?
    // if(state.selectedYear !== ''){
    //   apiUrl += `/modelYear/${state.selectedYear}`
    // }

    if(state.selectedCarType !== ''){
      apiUrl += `/vehicleType/${state.selectedCarType}`
    }

    //handle if there are no results?
    //what if there are errors?
    // console.log(apiUrl);
    const promise = axios
    .get(`${apiUrl}?format=json`)
    .then((response) => {
      const filteredResult = response.data.Results;
      // console.log("response in likes hook: ", response);
      dispatch({
        type: FILTER_RESULTS,
        filteredResult
      });
    })
    .catch((error) => {
      console.log("I don't *like* this mess", error);
    });

    return promise;
    
  };

  const setManufacturerAndTypes = (value) => {
    const types = value ? value.VehicleTypes : [];
    const manufacturer = value ? value.Mfr_CommonName.replace(/\s+/g, '').toLowerCase() :'';

    dispatch({
      type: SET_CAR_TYPES,
      types
    });

    dispatch({
      type: SET_SELECTED_MANUFACTURER,
      manufacturer
    })
  }

  const setCarType = (value) => {
    //I could make a utility function for this
    const selectedCarType = value ? value.Name.replace(/\s+/g, '').toLowerCase() : '';
    dispatch({
      type: SET_SELECTED_CAR_TYPE,
      selectedCarType
    })
  }

  const setYear = (value) => {
    console.log(setYear);
    dispatch ({
      type: SET_SELECTED_YEAR,
      value
    })
  }

  return {
    state,
    filterResults,
    setManufacturerAndTypes,
    setCarType,
    setYear
  };
}


export default useApplicationData;
