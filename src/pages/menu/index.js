
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"

class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="me">
                {this.props.children}
                <Header/>
                <ul>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="/pray">产品介绍</Link></li>
                    {/*<li> <Link to="nav">新闻动态</Link> </li>*/}
                    <li> <Link to="contact">联系我们</Link> </li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Menu);









