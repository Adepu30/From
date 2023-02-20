import Create from "./Create.js";
// import Update from "./Update.js";
// import Read from "./Read.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Table from "./component2"
const App = () => {
  return (
    <>
      {/* <Router>
        <Routes> */}
          {/* <Route path="/create" element= */}
          <Create />
          {/* <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} /> */}
          {/* <Route exact path ='/delete' component={Delete}/>
        </Routes> */}
      {/* </Router> */}
    </>
  );
};

export default App;
