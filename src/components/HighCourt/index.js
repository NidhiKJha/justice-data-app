import React, { Component } from "react";
import MovementsHighCourtChart from "./Charts/Movement";
import StateCards from "./States/cards";

class HighCourt extends Component {
  render() {
    return (
      <div>
        <MovementsHighCourtChart />;
        <StateCards />
      </div>
    );
  }
}

export default HighCourt;
