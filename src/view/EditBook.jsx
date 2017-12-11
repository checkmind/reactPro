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

		this.changeWords = function(){
			let arr = this.state.words;
			arr.push(this.state.title); //先放入标题
			let str = ''
			console.log(arr)
			this.state.content.split('').forEach(function(val, index){
				if(val!=' ')
					str+= val;
				else{
					arr.push(str)
					str = '';
				}
			})
			arr.push(str)
			console.log(arr)
			this.setState({
				words: arr
			})
		}
		this.saveWords = ()=>{
			this.changeWords();
			console.log(this.state.words)
		}
		this.changTitle = (ev)=>{
			this.setState({
				title: ev.target.value
			})
			console.log(this.state)
		}
		this.changContent = (ev)=>{
			this.setState({
				content: ev.target.value
			})
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
		        	<input type="text" 
		        		   className='editTitel' 	
		        		   onChange={this.changTitle} />
		        	<label>内容：</label>
		        	<input type='text'
		        	   	   className='editContent' 
		           	   	   onChange={this.changContent} />
		        	
		        </div>
		  </div>
		);
	}
}


export default template({
    component: EditBook
});
