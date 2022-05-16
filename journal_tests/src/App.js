import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      entries: ['',],
      entryTime: ['',]
    };
  }

  render(props) {
    const viewEntries = this.state.entries.map((contents, entryNum) => {
      return(
        <JournalEntry 
          className='JournalEntry' 
          onChange={(e) => {
            let allEntries = [...this.state.entries];
            let allDates = [...this.state.entryTime];
            allEntries[entryNum] = e;
            allDates[entryNum] = Date().toString()
            this.setState({
              entries: allEntries,
              entryTime: allDates
            });
          }}
          timeValue={this.state.entryTime[entryNum]}
        />
      );
    });

    return (
      <div className='App'>
        <div>{viewEntries}</div>
        <GenericButton className='AddEntry' onClick={() => this.addEntry()} value={'Add Entry'} />
      </div>
    );
  };

  addEntry(){
    let currEntries = this.state.entries;
    let allDates = this.state.entryTime
    this.setState({
      entries: currEntries.concat(['']),
      entryTime: allDates.concat([''])
    });
  }
}

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }  

  render(props) {
    const {onChange, timeValue, ...restOfProps} = this.props
    return(
      <div {...restOfProps}>
        <input 
          className='JournalText'
          type={'text'} 
          onChange={(e) => onChange(e.target.value)}
        />
        <p className='UpdateTime'>{timeValue}</p>
      </div>
    );
  }
}

class GenericButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(props) {
    const {onClick,value, ...restOfProps} = this.props
    return(
      <div {...restOfProps}>
        <button onClick={onClick}>{value}</button>
      </div>
    );
  }
}

export default App;
