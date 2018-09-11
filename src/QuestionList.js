import React, { Component } from 'react';
import classNames from 'classnames'

import questions from './questions';

class QuestionList extends Component {

  state = {
    selectedIndex: null
  }
 
  _onQuestionClick = (selectedIndex) => this.setState(() => ({selectedIndex}))

  render() {
    return (
      <ul className="questionList">
        {questions.map((question, idx) => {
          const isSelected = this.state.selectedIndex === idx
          const questionItemCN = classNames('questionItem', {'questionItemSelected': isSelected})
          const questionNumberCN = classNames('questionNumber', {'questionNumberSelected': isSelected})
          return (
            <li className={questionItemCN} key={question + idx} onClick={() => this._onQuestionClick(idx)}>
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
