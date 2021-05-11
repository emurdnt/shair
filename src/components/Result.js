// import useVisualMode from "../hooks/UserVisualMode";
// import useApplicationData from "../hooks/UseApplicationData";
import Show from "./result-components/Show";
import Empty from "./result-components/Empty";
import Error from "./result-components/Error";
import Status from "./result-components/Status";
import '../styles/result.scss'


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const LOADING = "SAVING";
const ERROR_FETCH = "ERROR_FETCH";


const Result = (props) => {
  return (
    <article className="result-container" data-testid="result-container">
    {props.mode === EMPTY && <Empty message = "No results for search criteria."/>}
    {props.mode === SHOW && (
      <Show
        results = {props.results}
      />
    )}
    {props.mode === LOADING && <Status message={"Fetching results..."} />}
    {props.mode === ERROR_FETCH && (
      <Error message = {"Something went wrong. Tell the software team."} />
    )}
  </article>
  );
}

export default Result;

