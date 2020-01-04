import * as Constants from '../constants/steps'
// actions: move to ($nextStep)
//
// states: START, ADDING_NODE, COMPLETE_NODE, COMPLETE_CONFIG (EXPORT)

export default (state = Constants.START, action) => {
	switch (action.type) {
		case Constants.NEW:
			break;
		case Constants.START:
			break;
		default:
			return state;
	}
}
