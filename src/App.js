
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/dashboard"
import Exchange from "./pages/exchange"
import Allocation from "./pages/allocation"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/allocation">
          <Allocation/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
