import React from 'react';
import ObjContent from './ObjContent';

export default class ConfigObjects extends React.Component {
    constructor(props){
    super(props);
    this.props.getConfigObj();
    this.renderConfigObjects = this.renderConfigObjects.bind(this);
  }

  renderConfigObjects(configObject,path){
    let configKeys = Object.keys(configObject);
      return (configKeys.map((key,index) => {
                  // condition ? iftrue : iffalse;
                  let currentPath = path ? ( path + "." + key ) : key;
                  if(typeof configObject[key] !== 'object'){
                      return ( <ObjContent key={index} path={currentPath}
                        configObject={configObject}
                        onChange={this.props.onChange}/> );
                  }
                  else{
                      return this.renderConfigObjects(configObject[key],currentPath);
                  }
            }));
    }

  render(){
      return(<div>
              { this.renderConfigObjects(this.props.configObject,'')}
              <button onClick={this.props.onSave.bind(this,this.props.configObject)}> Save</button>
            </div>);
  }
}
