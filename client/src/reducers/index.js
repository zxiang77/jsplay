import { combineReducers } from 'redux';
import k8sConfigReducer from './k8sConfigReducer';
import configStateReducer from './configStateReducer';

export default combineReducers({
	k8sConfig: k8sConfigReducer,
	configState: configStateReducer
});
// need to keep track of k8s specific data, e.g.: the networking data,
//  then the fields labeled with networking will be queried easily
// each input may need to define its own datatype: e.g.: networking, ports, aliases
