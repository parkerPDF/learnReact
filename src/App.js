import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat: [0, 0, 0],
      name: 'Enter Name',
      nameLocked: false,
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
      <div className='statDisp'>
        <SubButton onClick={() => this.subStat(s)}/>
        <DisplayVal className='statNum' value={this.state.stat[s]}/>
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
          {this.renderStatDisp(2)}
        </div>
        <div className='NameBlock'>
          <GenericInput 
            value={this.state.name} 
            onChange={(name) => {
              this.setState({name})
            }}
            disabled={this.state.nameLocked}
          />
          <button onClick={() => {
            this.setState({nameLocked: !this.state.nameLocked})
          }}>Lock Name</button>
        </div>
        <div className='TbdBlock'>More stuff in this Div</div>
        <div id="TestFormat"><h4>Testing This</h4></div>
      </div>
    );
  }
}

/**
 *           
<GenericInput value={this.state.name} onChange={(name) => {
  this.setState({name})
}}/>
 */
class GenericInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    const {type='text', value, onChange, ...restOfProps} = this.props
    return(
      <div>
        <input 
          type={type} 
          value={value} 
          onChange={(e) => {onChange(e.target.value);}} 
          {...restOfProps}
        />
      </div>
    );
  }
}

function AddButton(props) {
  return (
    <button 
      className='mathButton'
      onClick={props.onClick}
    >+</button>
  );
}
function SubButton(props) {
  return (
    <button 
      className='mathButton'
      onClick={props.onClick}
    >-</button>
  );
}
function DisplayVal(props) {
  const {value, ...restOfProps} = props
  return(
    <div {...restOfProps}>
      <h1>{((value-10) < 1 ? ((value-10)/2).toFixed() : ((value-11)/2).toFixed())}</h1>
      <h3>{value}</h3>
    </div>
  )
}

export default App;
