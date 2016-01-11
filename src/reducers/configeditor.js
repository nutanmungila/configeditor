import { SHOW_CONFIG_OBJ,ON_SAVE,ON_CHANGE } from '../constants/ActionTypes';

const initialState = {
  configObject:{}
};


function assignToPath(config,path,value){
  let arrayKeys = path.split(".");
  let currentpath = config;
  for( var i=0; i< (arrayKeys.length-1) ; i++){
    currentpath = currentpath[arrayKeys[i]];
  }
  currentpath[arrayKeys[arrayKeys.length-1]] = value;
  console.log('config final',config);
}

export default function configeditor(state=initialState, action) {
  switch (action.type) {

    case SHOW_CONFIG_OBJ:
      return{
        configObject:action.configObject
      };

    case ON_SAVE:
      return{
        configObject:action.configObject
      };

    case ON_CHANGE:
      assignToPath(state.configObject,action.path,action.value);
      return{
        configObject:state.configObject
      };
    default: return state;

  }
}
