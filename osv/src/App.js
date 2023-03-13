import "./App.css";
import LGDetails1 from "./LGDetails1.js";
import AppDelStatus1 from "./AppDelStatus1.js";
import BeneLiabDet1 from "./BeneLiabDet1.js";
import TotalOrdeAmt1 from "./TotalOrdeAmt1";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
          <div>
            <LGDetails1 />
          </div>

          <div>
            <AppDelStatus1 />
          </div>

          <div>
           <BeneLiabDet1 />
          </div>

          <div>
            <TotalOrdeAmt1 />
          </div>
          </>
  );
}

export default App;
