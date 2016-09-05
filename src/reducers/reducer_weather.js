
export default function (state = [], action) {

    switch (action.type) {
        case 'FETCH_WEATHER':
            return [action.payload.data, ...state];
    }

    console.log("Action Received", action);
    return state;
}

//import { FETCH_WEATHER } from '../actions/index';
