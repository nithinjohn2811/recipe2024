import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path = "/"> <Home /></Route>
          <Route exact path = "/create"> <Create /></Route>
          <Route exact path = "/recipe/:id"><Recipe /></Route>
          <Route exact path = "/search"><Search /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
