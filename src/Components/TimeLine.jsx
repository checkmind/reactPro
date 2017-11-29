import React, { Component } from 'react';
import Myhead from './Common/header'
import MyFoot from './Common/footer'
import Mybody from './Common/bodyer'


import  '../styles/module/timeline.less'

class TimeLine extends Component {
	
	constructor(){
		super();
		this.state = {
			words : [],
			maxLength: 8
		};
		this.changeWords = (words)=>{
			let arr,
				{maxLength} = this.state,
				wordsArr = [];

			arr = words.split('')
			for(let i = 0,len=arr.length;i<len;i+=maxLength){
				console.log(i,maxLength)
				let message = words.substr(i,maxLength)
				wordsArr.push(message);
			}

			return wordsArr;
		}
		this.fillWords = (words)=>{
			let arr = [];
			words.map(function(val){
				let item= val.split('').map(function(text){
								return <span key={Math.random()}>{text}</span>
						  })
				arr.push(<li key={Math.random()}><div>{item}</div></li>)
				return val;
			})
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
	}	
	render() {
		let words = [];

		 words = this.getWordsAndFill(['信乎','吾日三省吾身，为人谋而不忠乎？与朋友交而不信乎？传不习乎？信近于义，言可复也。”《左传。宣公二年》：“麂退，叹而言曰：‘不忘恭敬，民之主也。贼民之主。不忠；弃君之命，不信。有一于此，不如死也。’触槐而死。']);
		return (
		  <div className="timeline">
		    <div className='bodyer'>
		        <div className='mailBody'>

					{this.fillWords(words)}
		        </div>
		    </div>
		    <MyFoot/>
		  </div>
		);
	}
}

export default TimeLine;
