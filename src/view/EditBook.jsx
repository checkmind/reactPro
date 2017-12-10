import React, { Component } from 'react';

import {template} from '../mixins/template'
import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'


/* 竹简 */
import MailBody from '../Components/mailbody'

import  '../styles/module/editBook.less'

class EditBook extends Component {
	
	constructor(){
		super();
		this.state = {
			"open": false
		}
	}	
	render() {
		return (
		  <div className='editBook'>
		  		<div className='header'>
	              	<span className='down-arrow' onClick={()=>{ window.history.back()}}></span>
		            <h3>新建竹简</h3>
		            <a href='javascript:;' className='saveIcon' />
		        </div>
		        <div className='bodyer'>
		        	<label>标题：</label>
		        	<div contentEditable='true' className='editTitel' placeholder='请输入标题'></div>
		        	<label>内容：</label>
		        	<div contentEditable='true' className='editContent'></div>
		        </div>
		  </div>
		);
	}
}


export default template({
    component: EditBook
});
