export const IS_LOGIN = 'IS_LOGIN';  //是否登录

const judgeLogin = payload=>{
	return {
		type: IS_LOGIN,
		payload
	}
}