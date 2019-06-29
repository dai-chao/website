
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css"
import n1 from "../../images/主页/news1.png"
import n2 from "../../images/主页/news_2.jpg"
import n3 from "../../images/主页/news_3.jpg"
import n4 from "../../images/主页/news_4.jpg"

export default class News extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="news">
                <h2> - 新闻动态 -</h2>
                <ul>
                    <li>
                        <img src={n1} alt=""/>
                        <h2>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台。</h2>
                        <h3>2019-6-29</h3>
                    </li>
                    <li>
                        <img src={n2} alt=""/>
                        <h2>中国老龄协会领导莅临中汇祥龄公司考察调研。</h2>
                        <h3>2019-6-29</h3>
                    </li>
                    <li>
                        <img src={n3} alt=""/>
                        <h2>北京国龄中心与中航在京签约共建这样一平台。</h2>
                        <h3>2019-6-29</h3>
                    </li>
                    <li>
                        <img src={n4} alt=""/>
                        <h2>银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴。</h2>
                        <h3>2019-6-29</h3>
                    </li>

                        <a href="#">查看更多</a>


                </ul>

            </div>
        )
    }
}









