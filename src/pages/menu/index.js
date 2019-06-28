
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css"

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="me">
                <ul>
                    <li>首页</li>
                    <li>关于我们</li>
                    <li>产品介绍</li>
                    <li>新闻动态</li>
                    <li>联系我们</li>
                </ul>
            </div>
        )
    }
}









