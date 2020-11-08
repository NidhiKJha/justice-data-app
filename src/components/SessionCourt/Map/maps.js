import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import stateData from '../../../Data/statistics-persons-sentenced-to-death.json';

function SessionMap() {
    const [viewport, setViewport] = useState({
        latitude: 22.351148,
        longitude: 78.6677428,
        zoom: 3.8,
        width: '100vw',
        height: '100vh'
    });
    const [selectedState, setSelectedState] = useState(null);

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/tedtesla/ckd2zvvhi3glu1ipggq70rarn"
            >
                {stateData.map((state) => {
                    return (
                        <Marker
                            key={state.State}
                            latitude={state.Latitude}
                            longitude={state.Longitude}
                        >
                            <button
                                className="marker-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedState(state);
                                }}
                            >
                                <i className="fa fa-building" aria-hidden="true"></i>
                            </button>
                        </Marker>
                    );
                })}
                {selectedState ? (
                    <Popup
                        latitude={selectedState.Latitude}
                        longitude={selectedState.Longitude}
                        onClose={() => {
                            setSelectedState(null);
                        }}
                    >
                        {selectedState.Movements.map((movement) => (
                            <div className="State-Card">
                                <div className="flex-b">
                                    <span className="flex-t-head">State:</span>

                                    <span className="flex-b-body"> {movement['State']}</span>
                                </div>
                                <div className="flex-b">
                                    <span className="flex-t-head">
                                        Number of persons currently on death row:
                                    </span>

                                    <span className="flex-b-body">
                                        {movement['Number of persons currently on death row']}
                                    </span>
                                </div>
                                <div className="flex-b">
                                    <span className="flex-t-head">
                                        Persons sentenced to death in 2019:
                                    </span>

                                    <span className="flex-b-body">
                                        {movement['Persons sentenced to death in 2019']}
                                    </span>
                                </div>
                                <div className="flex-b">
                                    <span className="flex-t-head">Total no. of judgments:</span>

                                    <span className="flex-b-body">
                                        {' '}
                                        {movement['Total no. of judgments']}
                                    </span>
                                </div>
                                <div className="flex-b">
                                    <span className="flex-t-head">Judgments available:</span>

                                    <span className="flex-b-body">
                                        {' '}
                                        {movement['Judgments available']}
                                    </span>
                                </div>
                                <div className="flex-b">
                                    <span className="flex-t-head">Judgments not available:</span>

                                    <span className="flex-b-body">
                                        {' '}
                                        {movement['Judgments not available']}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}

export default SessionMap;
