import { useReducer, useEffect } from "react";
import axios from "axios";
import {
  reducer,
  SET_APPLICATION_DATA,
  FILTER_RESULTS,
  SET_CAR_TYPES,
  SET_SELECTED_MANUFACTURER,
  SET_SELECTED_CAR_TYPE,
  SET_SELECTED_YEAR
} from "../reducer/ApplicationReducer";

/**
 * Custom hook to manage the state better.
 * @returns 
 */

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    results: [],
    manufacturers:[],
    types:[],
    selectedManufacturer:'',
    selectedCarType:'',
    selectedYear:''
  });

  // RETRIEVES INITIAL APP DATA AND SETS IT WITH REDUCER
  useEffect(() => {
    Promise.all([
      axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json"),
      axios.get("https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/honda?format=json"),
     
    ]).then((all) => {
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

    let apiUrl = 'https://vpic.nhtsa.dot.gov/api'

    if(state.selectedManufacturer !== '' && state.selectedCarType === '' && state.selectedYear === ''){

      apiUrl += `/vehicles/GetModelsForMake/${state.selectedManufacturer}`;

    } else if (state.selectedManufacturer !== '' && (state.selectedCarType !== '' || state.selectedYear !== '')){

      apiUrl += `/vehicles/GetModelsForMakeYear/make/${state.selectedManufacturer}`;

    }

    if(state.selectedYear !== ''){
      apiUrl += `/modelYear/${state.selectedYear}`
    }

    if(state.selectedCarType !== ''){
      apiUrl += `/vehicletype/${state.selectedCarType}`
    }

    const promise = axios.get(`${apiUrl}?format=json`)
      .then((response) => {
        const filteredResult = response.data.Results;
        dispatch({
          type: FILTER_RESULTS,
          filteredResult
        });
        return response;
      })
      .catch((error) => {
        return error;
      });

      console.log(apiUrl);
      console.log(state);
    return promise;
    
  };

  const setManufacturerAndTypes = (value) => {
    const types = value ? value.VehicleTypes : [];
    const manufacturer = value.Mfr_CommonName ? value.Mfr_CommonName.replace(/\s+/g, '').toLowerCase() :'';

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
    const selectedCarType = value ? value.Name.replace(/\s+/g, '').toLowerCase() : '';
    dispatch({
      type: SET_SELECTED_CAR_TYPE,
      selectedCarType
    })
  }

  const setYear = (value) => {
    const year = value ? value.value : '';
    dispatch ({
      type: SET_SELECTED_YEAR,
      year
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
