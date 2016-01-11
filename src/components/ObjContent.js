import React from 'react';

export default class ObjContent extends React.Component{
  constructor(props){
    super(props);
    this.onEnterValue = this.onEnterValue.bind(this);
  }

  onEnterValue(event){
    this.props.onChange(this.props.path,event.target.value)
  }
  render(){
    return(<div>
            <div> {this.props.path} </div>
            <input type="text" onChange={this.onEnterValue}/>
          </div>);
  }
}
