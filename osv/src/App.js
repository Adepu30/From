
import './App.css';
import LGDetails from './LGDetails.js'
import AppDelStatus from './AppDelStatus.js'
import  BeneLiabDet from './BeneLiabDet.js'
import TotalOrdeAmt from './TotalOrdeAmt'
function App() {
  return (
    <div className="App">
      <div>

     <LGDetails/>
      </div>
      <div>

     <AppDelStatus/>
      </div>
      <div>
      <BeneLiabDet/>
      </div>
      <div>
      <TotalOrdeAmt/>
      </div>
    </div>
  );
}

export default App;
