
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import e1 from "../../images/联系我们/erweima.jpg"
import Footer from "../../components/footer/index"


class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="contact">
                {this.props.children}
                <Header/>
                <Banner/>
                <p className="db_right fl wow slideInRight"> - 联系我们 -</p>
                <ul className="db_left fl wow slideInLeft">
                    <li>电话：010-68570339</li>
                    <li>地址：北京市 丰台区 汉威国际广场 三区5栋</li>
                    <li>邮箱：zhxl_yl@163.com</li>
                </ul>
                <img src={e1} alt="" className="db_right fl wow slideInRight"/>
                <h3 className="db_right fl wow slideInRight">关注订阅号“祥龄资讯</h3>
                <h4 className="db_right fl wow slideInRight">获取更多资讯</h4>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Contact);









