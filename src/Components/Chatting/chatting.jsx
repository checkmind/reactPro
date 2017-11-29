import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../../styles/module/chatting.less'
class Chatting extends Component {
	
	constructor() {
		super()
		this.state = {
				more: "more",
				value: "",
				loverName: "嫦娥",
				message: [{
					id: 0,
					sender: 0,
					message: '第一句话',
					date: "2017-03-16 21:03:00"
				},{
					id: 1,
					sender: 1,
					message: '第er 句话',
					date: "2017-03-16 21:04:00"
				},{
					id: 2,
					sender: 0,
					message: '第一san句话',
					date: "2017-03-16 21:05:00"
				}]
		}
		this.changSend = (ev)=>{
			this.setState({
				value: ev.target.value
			})
		}
		// 填充聊天信息
		this.drawWords = ()=>{ 
			let res='';
			let type;
			if(this.refs.bodyer){
				this.refs.bodyer.scrollTop = 9999
			}
			return this.state.message.map(function(val){
				if(val.sender)
					type = 'right'
				else
					type = 'left'
				return      (<li className={type} key={val.id}>
								<div className='img'></div>
				        		<div className='words'>{val.message}</div>
			        		</li>)
				
			})
		}
		// 发送消息
		this.sendWords = ()=>{
			// state不能直接改变
			let message = this.state.message;
			message.push({
					sender: 0,
					message: this.state.value,
					date: new Date(),
					id: Math.random()
				})
			this.setState({
				message: message
			})
			this.setState({
				value: ''
			})
			this.refs.bodyer.scrollTop = 9999
			// 发送完聚焦
		//	this.refs.input_value.focus();
		}
	}
	render() {
		let {more,value,loverName} = this.state;
		let icon,style
		if(!value){
			icon = '+';
			more = 'more';
		}else{
			icon = '发送';
			more = 'send';
		}

	    return (
	      <div className='Chatting'>
	        <div className='header'>
	             <Link to={'/'+localStorage.myPageRouter||''} className='down-arrow'></Link>
	             <h3>{loverName}</h3>
	        </div>
	        <div className='bodyer' ref='bodyer'>
	        	{this.drawWords()}
	        </div>
	        <div className='footer'>
	            <a href="javascript:;" className='voice'></a>
                <input type="text" onChange={this.changSend} value={value} ref='input_value'/>
                <a href="javascript:;" className='icon'></a>
                <a href="javascript:;" className={more} onClick={this.sendWords}>{icon}</a>
	        </div>
	      </div>
	    );
	}
	componentDidMount() {
		this.refs.bodyer.scrollTop = 9999
	}
}

export default Chatting;
