import React, { Component } from 'react';

class SelectionControl extends Component {

  static defaultProps = {
    onUpArrowClick: () => {},
    onDownArrowClick: () => {}
  }

  render() {
    return (
      <div className="selectionControls">
        <span role="img" aria-label="up arrow button" className="arrowButton" onClick={this.props.onUpArrowClick}>
          ⬆️
        </span>
        <span role="img" aria-label="down arrow button" className="arrowButton" onClick={this.props.onDownArrowClick}>
          ⬇️
        </span>
      </div>
    );
  }
}

export default SelectionControl;
