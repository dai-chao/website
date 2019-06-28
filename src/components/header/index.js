
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../../images/log03.jpg"
import "./index.css"
import "../../iconfont/font_go4u9iqd7sg/iconfont.css"

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <header>
                <div className="logo">
                        <Link className="alignLeft" to="menu">
                            <img src={logo} alt=""/>
                        </Link>
                </div>
                <div className="menu">
                    <a href="">
                        <span className="icon iconfont icon-weibiaoti12"></span>
                    </a>
                </div>
            </header>
        )
    }
}









