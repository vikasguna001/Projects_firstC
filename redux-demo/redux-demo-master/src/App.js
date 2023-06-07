import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  console.log(myState.Data);
  return (
    <div className="App">
      <h1>{myState?.Data?.doc[0]?.data.score.matchCommentary}</h1>

      {/* <h1>ballByBallSummaries</h1>
      {
        myState?.Data?.doc[0]?.data?.score?.ballByBallSummaries.map((item, i) => {
          return (
            <>
              <span>{item.overNumber}</span> - <span>{item.firstInnings}</span><br />
            </>
          )
        })
      } */}

      <h1>innings</h1>
      {
        myState?.Data?.doc[0]?.data?.score?.innings.map((item, i) => {
          return (
            <>

              <p>{item?.inningsNumber}- {item?.teamName} - {item?.summary}</p>
              <p>wickets :{item?.wickets}</p>
              {

                item?.batsmen.map((data, i) => {
                  return (
                    <>
                      <p>{data.active == true ? "batsmen :-" + data.batsmanName : ""}</p>
                    </>
                  )
                })

              }
              --------------------------------------------------------------------
              {

                item?.bowlers.map((data, i) => {
                  return (
                    <>
                      <p>{data.isActiveBowler == true ? "bowlers :-" + data.bowlerName : ""}</p>
                    </>
                  )
                })

              }
              ==================================================================
            </>

          )
        })
      }
    </div>
  );
}

export default App;
