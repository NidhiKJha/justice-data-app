import React from 'react';
import './App.css';
import Slider from './components/slider';
import HighCourt from './components/HighCourt/index';
import JusticeCourt from './components/SupremeCourt/index';
import NavBar from './components/nav';
import SessionCourt from './components/SessionCourt/index';
import FinalObservations from './components/FinalObservation';

const Content = [
    `The Supreme Court, during the tenure of former Chief Justice Ranjan Gogoi,
listed and heard the maximum number of capital cases (27) since 2001`,
    `The POCSO Act was amended to introduce the death penalty for non-homicidal
rape of children`,
    `2019 saw an increase in proportion of death sentences imposed for sexual
offences. 52.94% of the death sentences imposed at trial courts and 65.38%
of High Court confirmations of death sentences involved sexual offences
along with murder`
];
class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <br></br>

                <br></br>
                <Slider>
                    {Content.map((paragraph) => {
                        return <p className="overview-body">{paragraph}</p>;
                    })}
                </Slider>
                <br></br>

                <JusticeCourt />
                <HighCourt />
                <SessionCourt />
                <br></br>
                <FinalObservations />
            </div>
        );
    }
}
export default App;
