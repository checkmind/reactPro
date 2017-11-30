import React, { Component } from 'react';
import  '../styles/module/child.css'

class Child extends Component {
	constructor() {
		super();
		this.state = {
			words : [],
			maxLength: 8,
			show: true
		};
		this.changeWords = (words)=>{
			let arr,
				{maxLength} = this.state,
				wordsArr = [];

			arr = words.split('')
			for(let i = 0,len=arr.length;i<len;i+=maxLength){
				let message = words.substr(i,maxLength)
				wordsArr.push(message);
			}
			return wordsArr;
		}
		this.fillWords = (words)=>{
			let arr = [],
				fatherWidth = document.querySelector("#root").clientWidth-36;
			if(this.refs.mailBody)
				fatherWidth = this.refs.mailBody.clientWidth;
			words.map(function(val){
				let item= val.split('').map(function(text){
								return <span key={Math.random()}>{text}</span>
						  })
				arr.push(<li key={Math.random()}><div>{item}</div></li>)
				return val;
			})
			// 补充空白
			if(words.length*34 < fatherWidth){
				let num  =Math.ceil(fatherWidth/34-words.length)
				for(let i = 0;i<num;i++){
					if(i%2===0)
						arr.push(<li key={Math.random()}><div></div></li>)
					else
						arr.unshift(<li key={Math.random()}><div></div></li>)	
					
				}
			}
			return arr;
		}
		/*
		 *{
			words: ['锄禾啦啦啦','王安石','宫花寂寞红。','宫花寂寞红。']
		 }
		*/
		this.getWordsAndFill =(words)=>{
			let arr = [];
			words.map((item)=>{
				arr = arr.concat(this.changeWords(item));
				return item;
			})

			return arr;
		}
		this.closeBook = (ev)=>{
			if(ev.target == document.querySelector('.mailBody')){
				this.setState({
					show: false
				})
				console.log('close')
			}
		}
	}
	render() {
		let words = [],
			el;
		if(this.state.show){

			words = this.getWordsAndFill(['锄禾','李绅','锄禾日当午','汗滴禾下土','谁知盘中餐','粒粒皆辛苦']);
			words = this.fillWords(words)
			el = (<div className='mailBody' ref='mailBody' onClick={this.closeBook}>
						{words}
			    	</div>);
			return el;
		} else {
			return '';
		}
	    
	}
}
export default Child