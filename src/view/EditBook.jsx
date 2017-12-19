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
			"open": false,
			"words": [],
			"title": '',
			"content": ''
		}

		this.changeWords = ()=>{
			let arr = this.state.words;
			arr.push(this.refs.editTitel.innerText); //先放入标题
			let str = ''
			this.refs.editContent.innerText.split('').forEach(function(val, index){
				if(val!=' ')
					str+= val;
				else{
					arr.push(str)
					str = '';
				}
			})
			arr.push(str)
			this.setState({
				words: arr
			})
		}
		this.saveWords = ()=>{
			this.changeWords();
			window.history.go(-1)
		}
		
		
	}	
	render() {
		let {title,content} = this.state;
		return (
		  <div className='editBook'>
		  		<div className='header'>
	              	<span className='down-arrow' onClick={()=>{ window.history.back()}}></span>
		            <h3>新建竹简</h3>
		            <a href='javascript:;' className='saveIcon' onClick={this.saveWords} />
		        </div>
		        <div className='bodyer'>
		        	<label>标题：</label>
		        	<div type="text" 
		        		   className='editTitel' 
		        		   contentEditable="true"
		        		   ref='editTitel'> 
		        	</div>
		        	<label>内容：</label>
		        	<div type='text'
		        	   	   className='editContent'
		        	   	   ref='editContent'
		        	   	   contentEditable="true"> 
		        	 </div>
		        	
		        </div>
		  </div>
		);
	}
}


export default template({
    component: EditBook
});
