
export default function (state = [], action) {

    switch (action.type) {
        case 'FETCH_WEATHER':
            return [action.payload.data, ...state];
	    case 'FETCH_WEATHER_ALL':
		    return [action.payload.city1.data, action.payload.city2.data, action.payload.city3.data, ...state];
	    case 'DELETE_CITY':
	        return [...state.slice(0, action.payload), ...state.slice(action.payload+1)];
    }
	

    return state;
}


