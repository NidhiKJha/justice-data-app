import React, { Component } from "react";
import MOVEMENTS_IN_HC from "./../../../Data/statistics-movements-in-hc-sc.json";
import { HorizontalBar } from "react-chartjs-2";

class MovementsHighCourtChart extends Component {
  formData = (dataset = MOVEMENTS_IN_HC) => {
    const numberOfPersons = [];
    const numberOfCases = [];
    const labels = [];

    for (let movement of dataset) {
      numberOfPersons.push(movement["Number of Persons in HC"]);
      numberOfCases.push(movement["Number of Cases in HC"]);
      labels.push(movement["Action"]);
    }

    return {
      labels,
      datasets: [
        {
          data: numberOfPersons,
          label: "Number of Persons in HC",
          backgroundColor: "#003d59",
        },
        {
          data: numberOfCases,
          label: "Number of Cases in HC",
          backgroundColor: "#69c2bd",
        },
      ],
    };
  };
  render() {
    return <HorizontalBar data={this.formData()}></HorizontalBar>;
  }
}

export default MovementsHighCourtChart;
