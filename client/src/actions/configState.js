import { EMPTY_DATA } from "../constants/utils";

export const createAction = (state, data = EMPTY_DATA) => {
    return {
        type: state,
        data: data
    }
};
