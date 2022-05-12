import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat: [0, 0],
    };
  }

  addStat(statNum){
    let stats = [...this.state.stat];
    stats[statNum] += 1
    this.setState({
      stat: stats
    });

  }

  subStat(statNum){
    let stats = [...this.state.stat];
    stats[statNum] -= 1
    this.setState({
      stat: stats
    });

  }

  renderStatDisp(s) {
    return (
      <div className='statDisp '>
        <SubButton onClick={() => this.subStat(s)}/>
        <DisplayVal value={this.state.stat[s]}/>
        <AddButton onClick={() => this.addStat(s)}/>
      </div>
      
    );
  }

  render() {
    return (
      <div className="App">
        <div className='StatBlock'>
          {this.renderStatDisp(0)}
          {this.renderStatDisp(1)}
        </div>
        <div>Other Stuff Goes Here</div>
        <div>More stuff in this Div</div>
      </div>
    );
  }

}

function AddButton(props) {
  return (
    <button 
      className='addButton'
      onClick={props.onClick}
    >+</button>
  );
}
function SubButton(props) {
  return (
    <button 
      className='subButton'
      onClick={props.onClick}
    >-</button>
  );
}
function DisplayVal(props) {
  return(
    <div>
      <h1>{(props.value-10)/2}</h1>
      <h3>{props.value}</h3>
    </div>
  )
}

export default App;
