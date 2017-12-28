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
		this.openBook = (id)=>{
			console.log(id)
			this.props.getMailWords(id)
			this.setState({
				open: true
			})
		}
		this.closeMail = ()=>{
			this.setState({
				open: false
			})
		}

		//this.props.getMailList();
		
	}	
	render() {
		let list = [],
			mailbody,
			mailList = this.props.mailList;
		if(this.state.open)
		    	mailbody = <MailBody closeMail={this.closeMail} wordsArr={this.props.mailWords}/>
		return (
		  <div className="timeline">
		    <div className='bodyer'>
		    	
		    	<div className='list'>
		    		{mailList.map((val)=>{
		    			return (<li key={val.id} onClick={ ()=>this.openBook(val.id) }>
									<p>{val.title}</p>
									<p>{val.timer}</p>
								</li>);
		    		})}
		    	</div>
		    	{mailbody}
		    	<div className='btnGroup'>
		    		<Link to='/EditBook' className='btnRadius'>+</Link>	
		    	</div>
		    </div>
		    <MyFoot page='0' unRead={typeof this.props.unRead==='number'?this.props.unRead:''}/>
		  </div>
		);
	}
}


export default template({
    component: TimeLine
});