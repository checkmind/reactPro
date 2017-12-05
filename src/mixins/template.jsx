/*
*  混合 connect到各个组件。
*  如果想要调用store里面的数据必须要被connect
*/
import React, { Component } from 'react';
import { connect } from 'react-redux'

const template = mySeting => {
	 let seting = {
        id: '', //应用唯一id表示
        url: '', //请求地址
        data: {}, //发送给服务器的数据
        component: <div></div>, //数据回调给的组件
    };
    for(let key in mySeting){
    	seting[key] = mySeting[key];
    }
    class parent extends Component {

    }
} 