import * as Constants from '../constants/configState'
import { EMPTY_DATA } from "../constants/utils";
// actions: move to ($nextStep)
//
// states: START, ADDING_NODE, COMPLETE_NODE, COMPLETE_CONFIG (EXPORT)
function applyActionReady(action) {

}

export default (state = Constants.START, action) => {
	switch (action.type) {
		case Constants.READY:
			if (action.data !== EMPTY_DATA) {
				applyActionReady(action);
			}
			break;
		case Constants.ADDING_NODE:
			break;
		case Constants.COMPLETE:
			break;
		default:
			return state;
	}
}
