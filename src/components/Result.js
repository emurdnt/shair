import useVisualMode from "../hooks/UserVisualMode";
import useApplicationData from "../hooks/UseApplicationData";
import Show from "./result-components/Show";
import Empty from "./result-components/Empty";
import Error from "./result-components/Error";
import Status from "./result-components/Status";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const LOADING = "SAVING";
const ERROR_FETCH = "ERROR_FETCH";

const Result = (props) => {

  const { mode, transition, back } = useVisualMode(
    props.results ? SHOW : EMPTY
  );


  const onSearch = () => {
    transition(LOADING);

    // props
    //   .bookInterview(props.id, interview)
    //   .then(() => transition(SHOW))
    //   .catch((error) => transition(ERROR_SAVE, true));
  }

  return (
    <article className="result-container" data-testid="result-container">
    {mode === EMPTY && <Empty message = "No results for criteria."/>}
    {mode === SHOW && (
      <Show
        results = {props.results}
      />
    )}
    {mode === LOADING && <Status message={"Fetching results..."} />}
    {mode === ERROR_FETCH && (
      <Error message = {"Cannot ."} />
    )}
  </article>
  );
}

export default Result;

