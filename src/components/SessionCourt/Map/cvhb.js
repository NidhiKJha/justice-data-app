import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import stateData from '../../../Data/statistics-persons-sentenced-to-death.json';
console.log(stateData);
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
                mapStyle="mapbox://styles/tedtesla/ckd3cecj03sqr1ipgz2cer4u7"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                {stateData.map((state) => {
                    console.log(state);
                    return state.Movements.map((movement) => (
                        <Marker
                            key={movement.State.toString()}
                            latitude={movement.Latitude}
                            longitude={movement.Longitude}
                        >
                            <button
                                className="marker-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedState(movement);
                                }}
                            >
                                <i className="fa fa-building" aria-hidden="true"></i>
                            </button>
                        </Marker>
                    ));
                })}
                {selectedState ? (
                    <Popup
                        latitude={selectedState.movement.Latitude}
                        longitude={selectedState.movement.Longitude}
                    ></Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}

export default SessionMap;
