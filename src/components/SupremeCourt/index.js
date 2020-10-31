import React, { Component } from 'react';

import MovementsSupremeCourtChart from './Charts/Movement';
import StateCards from './States/cards.js';

class JusticeCourt extends Component {
    render() {
        return (
            <div className="part" style={{ marginTop: '40px' }}>
                <div className="body-header"> Supreme Court Data </div>
                <MovementsSupremeCourtChart />
                <StateCards />
            </div>
        );
    }
}

export default JusticeCourt;
