import React, { Component } from 'react';
import './App.css';

import QuestionList from './QuestionList';
import SelectionControl from './SelectionControl';

import questions from './questions';

class App extends Component {

  state = {
    selectedIndex: null
  }

  onItemSelect = (selectedIndex) => this.setState(() => ({selectedIndex}))

  _selectIfPossible(type = 'next') {
    const {selectedIndex} = this.state
    if (questions.length < 1) return
    if (selectedIndex === null) {
      this.onItemSelect(0)
      return
    }
    let nextIndex = type === 'next'
      ? selectedIndex + 1
      : selectedIndex - 1
    if (nextIndex > questions.length - 1 || nextIndex < 0) nextIndex = selectedIndex
    this.onItemSelect(nextIndex)
  }

  onNextSelect = this._selectIfPossible.bind(this, 'next')
  onPreviousSelect = this._selectIfPossible.bind(this, 'prev')

  render() {
    return (
      <div>
        <h1>Trivia!</h1>
        <div className="questionsContainer">
          <QuestionList
            items={questions}
            selectedItem={this.state.selectedIndex}
            onItemClick={this.onItemSelect} />
          <SelectionControl
            onUpArrowClick={this.onPreviousSelect}
            onDownArrowClick={this.onNextSelect} />
        </div>
      </div>
    );
  }
}

export default App;
