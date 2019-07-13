import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_POSTS: 
            return {    //Reducerlar bu noktada store’a gelen action’a göre 
                        //uygulamanın state’inin nasıl değiştireceğini belirler ve store’a gönderir.
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        default: 
            return state;
    }
}
