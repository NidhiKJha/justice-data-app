import React, { Component } from 'react';

import SessionMap from './Map/maps';

class SessionCourt extends Component {
    render() {
        return (
            <div className="part" style={{ marginTop: '40px' }}>
                <div className="tab-header" style={{ textAlign: 'center' }}>
                    State Wise Analysis Of Session Court Data
                </div>
                <SessionMap />
            </div>
        );
    }
}

export default SessionCourt;
