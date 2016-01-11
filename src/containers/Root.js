import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ConfigEditorMain from './ConfigEditorMain'

export default class Root extends Component{
  render(){
    const {store} = this.props;
    return(
      <Provider store={store}>
        <ConfigEditorMain />
      </Provider>
    );
  }
}
