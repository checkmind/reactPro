import { IS_LOGIN } from '../Action/index'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../Action/index'
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
    console.log(Object.assign({},state,action))
	switch(action.type){
		case IS_LOGIN:
            return Object.assign({},state,action)
		default: 
			return state
	}
}