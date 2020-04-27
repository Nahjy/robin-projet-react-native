import { Actions } from "react-native-router-flux";

const initState = {
    user: null,
    room: null,
    messages: [],
    error: undefined
}

export const chat = function(state = initState, action){
    
    switch (action.type) {
        case 'JOIN_REQUEST':
            return {
                ...state,
                user: action.user,
                room: action.room,
                error: null
            };
            case 'JOIN_SUCCESS':
                return{
                    ...state,
                    messages: action.messages,
                    error: null
                };
                case 'JOIN_MESSAGE_SUCCESS':
                    return{
                        ...state,
                        messages: [
                            ...state.messages,
                            action.messages]
                    };
                    case 'SYNC_SUCCESS':
                        return {
                            ...state,
                            message: action.messages
                        }
                    case 'FAILURE':
                    case 'SYNC_FAILURE':
                    return{
                        ...state,
                        error: action.error
                    };
                    default : return state;
    }

    return state;
}