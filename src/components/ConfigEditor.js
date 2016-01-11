import React from 'react';
import ConfigObjects from './ConfigObjects';

export default class ConfigEditor extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ConfigObjects configObject={this.props.configeditor.configObject} getConfigObj={this.props.actions.getConfigObj}
          onSave={this.props.actions.onSaveWriteFile} onChange={this.props.actions.onChange}/>
      </div>
    );
  }
}
