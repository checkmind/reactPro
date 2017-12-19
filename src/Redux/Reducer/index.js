import { IS_LOGIN, UNREAD } from '../Action/index'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../Action/index'
import { MAILLIST } from '../Action/index'
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
            state['isLogin'] = action.isLogin
            return state
		default: 
			return state
	}
}
export const unRead = (state = {}, action = {} ) =>{
   // console.log(action.unread)
    switch(action.type){
        case UNREAD:
            state['unRead'] = action.unread
            return state;
        default:
            return state;
    }
}
export const mailList = ( state = {}, action = {} ) => {
    console.log('set mail list',state.type)
    switch(action.type){
        case MAILLIST:
            state['mailLists'] = action.payload
            console.log(state)
            return state;
        default:
            return state;
    }
}
