import {SHOW_CONFIG_OBJ,ON_SAVE,ON_CHANGE} from '../constants/ActionTypes.js';

function showConfigObj(configObject){
  return {
    type:SHOW_CONFIG_OBJ,
    configObject:configObject
  }
}

export function getConfigObj() {
  return (dispatch) =>{
    $.ajax({
      url:'http://localhost:3002/webpack/config',
      dataType:'json',
      success:(data) => {
        console.log('success',data);
        dispatch(showConfigObj(data));
      },
      error:() => {
        console.log('error');
      }
    });
  }
}

export function onChange(path,value) {
  return{
    type:ON_CHANGE,
    path:path,
    value:value
  }
}

export function onSaveWriteFile(configObject) {

  return (dispatch) => {
    $.ajax({
      type:"POST",
      url:"http://localhost:3002/webpack/config",
      data:configObject,
      success:function(data) {
        console.log(data);
        dispatch(onSave(configObject));
      },
      failure:function() {

      }
    });
  }
}

function onSave(configObject) {
  return{
    type:ON_SAVE,
    configObject:configObject
  }
}
