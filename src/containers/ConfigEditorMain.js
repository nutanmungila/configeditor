import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ConfigActions from '../actions/ConfigActions.js';
import ConfigEditor from '../components/ConfigEditor';

class ConfigEditorMain extends Component {
  render(){
    const {configeditor,actions} = this.props;
    return(
      <div>
        <div> Config Editor </div>
        <ConfigEditor configeditor={configeditor} actions={actions} />
      </div>
    )
  }
}

function mapState(state) {
  return{
    configeditor:state.configeditor
  };
}

function mapDispatch(dispatch) {
  return{
    actions:bindActionCreators(ConfigActions,dispatch)
  };
}

export default connect(mapState,mapDispatch)(ConfigEditorMain);
