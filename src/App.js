import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Items from "../src/pages/Items/Items";
import UserStorage from "./utils/userToken";

const App = () => {
  const { isToken } = UserStorage();

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={isToken ? <Navigate replace to="/items" /> : <Home />}
            />

            <Route
              exact
              path="/items"
              element={isToken ? <Items /> : <Navigate replace to="/" />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
