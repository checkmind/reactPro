import React, { Component } from 'react';
import {template} from '../mixins/template'

import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
/* 竹简 */
import MailBody from '../Components/mailbody'

import  '../styles/module/timeline.less'

class TimeLine extends Component {
	
	constructor(props,context){
		super(props,context);
		this.state = {
			"open": false
		}
		this.fillList = () =>{
			let arr = [{
				value : '备忘录',
				time: new Date()
			}]
		}
		this.openBook = ()=>{
			this.setState({
				open: true
			})
		}
		this.closeMail = ()=>{
			this.setState({
				open: false
			})
		}
		this.props.getMailList();
		console.log(this.props)
	}	
	render() {
		let list = [],
			mailbody;

		for(let i = 0;i<14;i++){
			list.push(<li key={Math.random()} onClick={this.openBook}>
						<p>这是一条备忘录这是一条备忘录这是一条备忘录这是一条备忘录这是一条备忘录这是一条备忘录这是一条备忘录这是一条备忘录</p>
						<p>2017/12/01</p>
					 </li>)
		}
		if(this.state.open)
		    	mailbody = <MailBody closeMail={this.closeMail}/>
		return (
		  <div className="timeline">
		    <div className='bodyer'>
		    	
		    	<div className='list'>
		    		{list}
		    	</div>
		    	{mailbody}
		        <Link to='/EditBook' className='btnRadius'>+</Link> 
		    </div>
		    <MyFoot page='0' unRead={this.props.unRead.unRead}/>
		  </div>
		);
	}
}


export default template({
    component: TimeLine
});