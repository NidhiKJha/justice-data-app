import React, { Component } from 'react';

import SessionMap from './Map/maps';

class SessionCourt extends Component {
    render() {
        return (
            <div className="part" style={{ marginTop: '40px' }}>
                <SessionMap />
            </div>
        );
    }
}

export default SessionCourt;
