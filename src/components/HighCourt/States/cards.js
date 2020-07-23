import React from "react";
import "./cards.css";

class StateCards extends React.Component {
  render() {
    return (
      <div className="tabs">
        <h1>State Data</h1>
        <Tabs>
          <Tab label="UP">
            <div>
              <p>Tab 1 content</p>
            </div>
          </Tab>
          <Tab label="Maharashtra">
            <div>
              <p>Tab 2 content</p>
            </div>
          </Tab>
          <Tab label="MP">
            <div>
              <p>Tab 3 content</p>
            </div>
          </Tab>
          <Tab label="Kerala">
            <div>
              <p>Tab 4 content</p>
            </div>
          </Tab>
          <Tab label="Bihar">
            <div>
              <p>Tab 5 content</p>
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
