import { REQUEST_STARTED, REQUEST_FAILED, REQUEST_SUCCESSFUL } from "../actions";

const initialState = {
    isFetching: false,
    data: '',
    error: '',
};

function gotReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
                data: '',
                error: '',
            };  
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                data: action.payload[0],
                error: '',
            };
        case REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                data: '',
            };
        default:
            return state;
    }
}

export default gotReducer;