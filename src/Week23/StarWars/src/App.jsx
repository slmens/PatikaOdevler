import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import CardDetail from "./CardDetail.jsx";
import "./App.css";
// gemi arasında arama yap
// gemi detayları sayfası yap, history push

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={CardDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
