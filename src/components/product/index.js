
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link,withRouter } from "react-router-dom";
import "./index.css"
import u1 from "../../images/主页/Big_icon1.png"
import u2 from "../../images/主页/Big_icon2.png"
import u3 from "../../images/主页/Big_icon3.png"
import u4 from "../../images/主页/Big_icon4.png"
 class Product extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(

                <div className="product">
                    <Link to="pray">
                        <h2 className="fl wow slideInDown">- 核心产品 -</h2>
                        <ul>
                            <li className="db_left fl wow slideInLeft">
                                <img src={u1} alt=""/>
                                <h2>全国老年服务</h2>
                                <h2>信用信息平台</h2>
                            </li>
                            <li className="db_right fl wow slideInRight">
                                <img src={u2} alt=""/>
                                <h2>新时代智慧健康</h2>
                                <h2>养老平台</h2>
                            </li>
                        </ul>
                        <ul className="proul">
                            <li className="db_left fl wow slideInLeft">
                                <img src={u3} alt=""/>
                                <h2>北三县</h2>
                                <h2>电商下乡扶贫项目</h2>
                            </li>
                            <li className="db_right fl wow slideInRight" >
                                <img src={u4} alt=""/>
                                <h2 className="wuyou">无忧养老康养项目</h2>
                            </li>
                        </ul>
                    </Link>
                </div>

        )
    }
}

export default withRouter(Product)






