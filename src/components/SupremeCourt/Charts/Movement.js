import React, { Component } from 'react';
import MOVEMENTS_IN_SC from './../../../Data/statistics-movements-in-hc-sc.json';
import { HorizontalBar } from 'react-chartjs-2';

class MovementsSupremeCourtChart extends Component {
    formData = (dataset = MOVEMENTS_IN_SC) => {
        const numberOfPersons = [];
        const numberOfCases = [];
        const labels = [];

        for (let movement of dataset) {
            numberOfPersons.push(movement['Number of Persons in SC']);
            numberOfCases.push(movement['Number of Cases in SC']);
            labels.push(movement['Action']);
        }

        return {
            labels,
            datasets: [
                {
                    data: numberOfPersons,
                    label: 'Number of Persons in SC',
                    backgroundColor: '#003d59'
                },
                {
                    data: numberOfCases,
                    label: 'Number of Cases in SC',
                    backgroundColor: '#69c2bd'
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
                        text: 'Analysis of Actions in Supreme Court',
                        fontWeight: 500,
                        fontSize: 16,
                        fontColor: '#1b1d6b'
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    min: 0
                                }
                            }
                        ]
                    }
                }}
            ></HorizontalBar>
        );
    }
}

export default MovementsSupremeCourtChart;
