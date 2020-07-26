import React, { Component } from 'react';
import STATE_MOVEMENTS_HC from './../../../Data/movements-high-court.json';
import './cards.css';

const TabButtons = ({ buttons, changeTab, activeTab }) => {
    return (
        <div className="tab-buttons">
            {buttons.map((button) => {
                return (
                    <button
                        key={button}
                        className={button === activeTab ? 'active' : ''}
                        onClick={() => changeTab(button)}
                    >
                        {button}
                    </button>
                );
            })}
        </div>
    );
};

const Tab = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>;
};

class Tabs extends Component {
    state = {
        activeTab: this.props.children[0].props.label
    };
    changeTab = (tab) => {
        this.setState({ activeTab: tab });
    };
    render() {
        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, (child) => {
                    buttons.push(child.props.label);
                    if (child.props.label === this.state.activeTab) content = child.props.children;
                })}

                <TabButtons
                    activeTab={this.state.activeTab}
                    buttons={buttons}
                    changeTab={this.changeTab}
                />
                <div className="tab-content">{content}</div>
            </div>
        );
    }
}

const MovementCard = ({ movement, open }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(open);
    const style = {
        collapsed: {
            display: 'none'
        },
        expanded: {
            display: 'block'
        },
        buttonStyle: {
            display: 'block',
            width: '100%'
        }
    };
    return (
        <div className="block">
            <div className="Box-Section" onClick={() => setIsCollapsed(!isCollapsed)}>
                <span className="pad-body">
                    {movement['PID']}{' '}
                    {movement['Cause Title'] ? movement['Cause Title'] : 'No Title available'}
                </span>
                <button className="pad-head">
                    {isCollapsed ? (
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    ) : (
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    )}
                </button>
            </div>
            <span
                style={isCollapsed ? style.expanded : style.collapsed}
                aria-expanded={isCollapsed}
            >
                <div className={open ? 'panel-collapse' : 'panel-collapse panel-close'}>
                    <div className="Box-Card">
                        <div className="flex-t">
                            <span className="flex-t-head">Action</span>
                            <span className="flex-t-body">{movement['Action']}</span>
                        </div>
                        <div className="flex-t">
                            <span className="flex-t-head">Nature Of Offence</span>
                            <span className="flex-t-body">{movement['Nature of Offence']}</span>
                        </div>
                        <div className="flex-t">
                            <span className="flex-t-head">Offence</span>
                            <span className="flex-t-body">
                                {' '}
                                {movement['Description of offence accused of']}
                            </span>
                        </div>
                    </div>
                    <div className="Box-Card">
                        <div className="flex-t">
                            <span className="flex-t-head">Date</span>
                            <span className="flex-t-body">{movement['Date']}</span>
                        </div>
                        <div className="flex-t">
                            <span className="flex-t-head">Court Bench</span>
                            <span className="flex-t-body">{movement['Court (Bench)']}</span>
                        </div>
                        <div className="flex-t">
                            <span className="flex-t-head">Coram</span>
                            <span className="flex-t-body"> {movement['Coram']}</span>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
};

const StateTab = ({ state }) => {
    return (
        <div>
            {state['Movements'].map((movement) => (
                <MovementCard key={movement['PID']} movement={movement} />
            ))}
        </div>
    );
};

class StateCards extends Component {
    render() {
        return (
            <div className="tabs">
                <div className="tab-header">State Wise High Court Data</div>
                <Tabs>
                    {STATE_MOVEMENTS_HC.map((state) => {
                        return (
                            <Tab key={state.State} label={state.State}>
                                <StateTab state={state} />
                            </Tab>
                        );
                    })}
                </Tabs>
            </div>
        );
    }
}

export default StateCards;
