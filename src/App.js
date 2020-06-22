import React from "react";
import { Router, Route, Switch } from "react-router-dom";

//import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

import Home from "./views/Home";
//import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import About from "./views/About";
// styles

import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Footer from "./components/Footer";

initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/**<PrivateRoute path="/profile" component={Profile} />*/}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
