import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/">
          <Login />
        </Route>
        <Route exact path = "/home">
          <MainContainer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
