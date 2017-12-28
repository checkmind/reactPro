import { IS_LOGIN, UNREAD } from '../Action/index'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../Action/index'
import { MAILLIST, MAILLISTINIT, MAILWORDS } from '../Action/index'
import Immutable from 'immutable';


const defaultlState = Immutable.fromJS({data: {}, isFetching: false})
//首次渲染时获取数据
export const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return state.set('isFetching',true);
        case RECEIVE_POSTS:
            return Immutable.Map({'data':action.json,'isFetching':false});//返回一个新的state
        default:
            return state
    }
}

export const loginOrNot = (state = {}, action = {} )=>{
    if(window.localStorage.isLogin){
        state['isLogin'] = true
        return state;
    }
	switch(action.type){
		case IS_LOGIN:
            return action.isLogin
		default: 
			return state
	}
}
export const unRead = (state = 0, action = {} ) =>{
    switch(action.type){
        case UNREAD:
            return action.unread;
        default:
            return state;
    }
}
export const mailList = ( state = [], action = {} ) => {
    console.log("看看")
    console.log(action)
    switch(action.type){
        case MAILLIST:
            return [...state,...action.payload];
        case MAILLISTINIT:
            return [];
        default:
            return state;
    }
}
export const mailWords = ( state=[], action={} ) =>{
    switch(action.type){
        case MAILWORDS:
            return [...state,...action.payload];
        default:
            return state;
    }
}
