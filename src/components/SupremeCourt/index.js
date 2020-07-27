import React, { Component } from 'react';

import MovementsSupremeCourtChart from './Charts/Movement';
import StateCards from './States/cards.js';
import Defination from "./Analysis";

class JusticeCourt extends Component {
    render() {
        return (
            <div className="part" style={{ marginTop: '40px' }}>
                <div className="body-header"> Supreme Court Data </div>
                <MovementsSupremeCourtChart />
<Defination/>
                <StateCards />
            </div>
        );
    }
}

export default JusticeCourt;
