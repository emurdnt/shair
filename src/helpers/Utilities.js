/**
 * Generates an array of years.
 * @param {number} startYear 
 * @returns [{}]
 */

const generateYears = (startYear) => {
  let years = [];
  const currYear = Number(new Date().getFullYear());

  for(let i = currYear; i >= startYear; i--){
    years.push({
      value: i.toString()
    });
  }

  return years;
}

export default generateYears;