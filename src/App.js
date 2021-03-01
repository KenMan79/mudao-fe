import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard.js";
import Exchange from "./pages/exchange/Exchange.js";
import Allocation from "./pages/allocation/Allocation.js";
import Test from "./pages/test/test.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/allocation">
            <Allocation />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
