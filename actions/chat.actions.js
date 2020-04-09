import { chatService } from '../services'

export const chatActions = {

}

function join(user, room) {
    return{
        type: 'JOIN_REQUEST', user, room
    };
}