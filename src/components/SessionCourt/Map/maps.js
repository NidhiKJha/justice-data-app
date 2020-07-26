import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
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
                        ></Marker>
                    ));
                })}
            </ReactMapGL>
        </div>
    );
}

export default SessionMap;
