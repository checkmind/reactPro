import { IS_LOGIN } from '../Action/index'

export const loginOrNot = (state = {}, action = {} )=>{
	switch(action.type){
		case IS_LOGIN:
			return state;
		default: 
			return 0
	}
}