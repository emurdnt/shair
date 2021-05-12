const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_CAR_TYPES = "SET_CAR_TYPES";
const FILTER_RESULTS = "FILTER_RESULTS";
const SET_SELECTED_MANUFACTURER = "SET_SELECTED_MANUFACTURER";
const SET_SELECTED_CAR_TYPE = "SET_SELECTED_CAR_TYPE";
const SET_SELECTED_YEAR = "SET_SELECTED_YEAR";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_APPLICATION_DATA:
      const {results, manufacturers} = action;
      return {
        ...state,
        results,
        manufacturers
      };
    
    case SET_CAR_TYPES:
      const {types} =  action;
      return {...state,types: types}

    case SET_SELECTED_MANUFACTURER:
      const {manufacturer} =  action;
      return {...state, selectedManufacturer: manufacturer }

    case SET_SELECTED_CAR_TYPE:
      const {selectedCarType} =  action;
      return {...state, selectedCarType: selectedCarType }

    case SET_SELECTED_YEAR:
      const {year} =  action;
      return {...state, selectedYear: year }
    
    case FILTER_RESULTS: 
      const {filteredResult} = action;
      return {...state, results: filteredResult};
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  reducer,
  SET_APPLICATION_DATA,
  FILTER_RESULTS,
  SET_CAR_TYPES,
  SET_SELECTED_MANUFACTURER,
  SET_SELECTED_CAR_TYPE,
  SET_SELECTED_YEAR
}