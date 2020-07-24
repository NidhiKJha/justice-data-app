import React, { Component } from "react";
import STATE_MOVEMENTS_HC from "./../../../Data/movements-high-court.json";
import "./cards.css";

const StateTab = (props) => {
  console.log(props);
  return (
    <Tab label="{props.State}">
      <div>
        <p>Tab 1 content</p>
      </div>
    </Tab>
  );
};

// const MovementCard = (props) => {
//   return (
//     <Tab label={props.Movements}>
//       <div>
//         <p>Tab 1 content</p>
//       </div>
//     </Tab>
//   );
// };

class StateCards extends Component {
  render() {
    return (
      <div className="tabs">
        <h1>State Data</h1>
        <Tabs>
          {/* {STATE_MOVEMENTS_HC.map((state) => (
            <StateTab state={state} />
          ))} */}
          <Tab label="UP">
            <div>
              <p>Tab 1 content</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
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
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
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

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
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

export default StateCards;
