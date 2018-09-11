import React, { Component } from 'react';
import classNames from 'classnames'

class QuestionList extends Component {

  static defaultProps = {
    onItemClick: () => {},
    selectedItem: null,
    items: []
  }

  render() {
    return (
      <ul className="questionList">
        {this.props.items.map((question, idx) => {
          const isSelected = this.props.selectedItem === idx
          const questionItemCN = classNames('questionItem', {'questionItemSelected': isSelected})
          const questionNumberCN = classNames('questionNumber', {'questionNumberSelected': isSelected})
          return (
            <li className={questionItemCN} key={question + idx} onClick={() => this.props.onItemClick(idx)}>
              <div className={questionNumberCN}>{idx + 1}</div>
              <div className="questionText">{question}</div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default QuestionList;
