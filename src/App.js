import React from "react";
import { Route, Switch } from "react-router-dom";
import Navi from "./Components/Utility/Navi";
import Home from "./Components/Utility/Home";
import AutoLiability from "./Components/Views/Auto/AutoLiability";
import AutoExtras from "./Components/Views/Auto/AutoExtras";
import AutoMedical from "./Components/Views/Auto/AutoMedical";
import AutoPDC from "./Components/Views/Auto/AutoPDC";
import AutoLandingPage from "./Components/Views/Auto/AutoLandingPage";
import HomeownersLandingPage from "./Components/Views/Homeowners/HomeownersLandingPage";
import UmbrellaLandingPage from "./Components/Views/Umbrella/UmbrellaLandingPage";
import VPPLandingPage from "./Components/Views/VPP/VPPLandingPage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Auto routes linked */}
            <Route path="/auto" component={AutoLandingPage} />
            <Route path="/auto_liability" component={AutoLiability} />
            <Route path="/auto_medical" component={AutoMedical} />
            <Route path="/auto_pdc" component={AutoPDC} />
            <Route path="/auto_extras" component={AutoExtras} />

            <Route path="/homeowners" component={HomeownersLandingPage} />
            <Route path="/umbrella" component={UmbrellaLandingPage} />
            <Route path="/vpp" component={VPPLandingPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
