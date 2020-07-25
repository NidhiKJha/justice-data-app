import React from "react";
import "./App.css";
import Slider from "./components/slider";
import HighCourt from "./components/HighCourt/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <Slider>
          <p className="overview-body">
            2019 saw an increase in proportion of death sentences imposed for
            sexual offences. 52.94% of the death sentences imposed at trial
            courts and 65.38% of High Court confirmations of death sentences
            involved sexual offences along with murder
          </p>
          <p className="overview-body">
            The Supreme Court, during the tenure of former Chief Justice Ranjan
            Gogoi, listed and heard the maximum number of capital cases (27)
            since 2001
          </p>
          <p className="overview-body">
            The POCSO Act was amended to introduce the death penalty for
            non-homicidal rape of children
          </p>
          <p className="overview-body">
            The state legislature of Andhra Pradesh amended the Indian Penal
            Code to introduce the death penalty for non-homicidal rape of adult
            women
          </p>
        </Slider>
        <br></br>
        <HighCourt />
      </div>
    );
  }
}
export default App;
