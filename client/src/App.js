import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import NewProduct from './NewProduct';
import MainContainer from "./MainContainer";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path = "/home">
          <MainContainer setUser={setUser}/>
        </Route>
        <Route exact path = "/new-shoe">
          <NewProduct />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
