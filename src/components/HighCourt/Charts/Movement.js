import React, { Component } from 'react';
import MOVEMENTS_IN_HC from './../../../Data/statistics-movements-in-hc-sc.json';
import { HorizontalBar } from 'react-chartjs-2';

class MovementsHighCourtChart extends Component {
    formData = (dataset = MOVEMENTS_IN_HC) => {
        const numberOfPersons = [];
        const numberOfCases = [];
        const labels = [];
        const options = [];

        for (let movement of dataset) {
            numberOfPersons.push(movement['Number of Persons in HC']);
            numberOfCases.push(movement['Number of Cases in HC']);
            labels.push(movement['Action']);
            options.push();
        }

        return {
            labels,
            options: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                }
            },
            datasets: [
                {
                    data: numberOfPersons,
                    label: 'Number of Persons in HC',
                    backgroundColor: '#003d59',
                    barPercentage: 0.5,
                   
                },
                {
                    data: numberOfCases,
                    label: 'Number of Cases in HC',
                    backgroundColor: '#69c2bd',

                    borderWidth: 0.2
                }
            ]
        };
    };
    render() {
        return (
            <HorizontalBar
                data={this.formData()}
                options={{
                    title: {
                        display: true,
                        text: 'Analysis of Actions in High Court',
                        fontWeight: 500,
                        fontSize: 16,
                        fontColor: '#1b1d6b'
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    min: 0
                                },
                                barPercentage: 0.4,
                                barThickness: 6, // number (pixels) or 'flex'
                                maxBarThickness: 8 // number (pixels)
                            }
                        ]
                    }
                }}
            ></HorizontalBar>
        );
    }
}

export default MovementsHighCourtChart;
