
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import {  Link ,withRouter} from "react-router-dom";
import "./index.css?+Math.random()"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import v1 from "../../images/新闻动态/news_2.jpg"
import v2 from "../../images/新闻动态/news_4.jpg"
import v3 from "../../images/新闻动态/news_3.jpg"
import v4 from "../../images/新闻动态/news_5.jpg"
import v5 from "../../images/新闻动态/news_1.jpg"
import v6 from "../../images/新闻动态/news_6.jpg"
// import v6 from "../../images/新闻动态/news_6.jpg"
import Footer from "../../components/footer/index"
import 'animate.css?+Math.random()'
import { WOW } from 'wowjs';
new WOW({live: false}).init();

class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="nav">
                {this.props.children}
                <Header/>
                <Banner/>
                <h2 className=" wow bounceIn"> - 新闻动态 -</h2>
                <ul>
                    <Link to="news1">
                        <li className=" wow bounceInLeft">
                            <img src={v1} alt=""/>
                            <h2>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台。</h2>
                            <h5>日前，中汇祥龄与老龄办正着手筹划“明星进社区宣传新时代智慧健康养老服务平台”计划，预计计划实施后，届时将有众多影视明星为中汇祥龄大力推广宣传新时代智慧健康养老服务平台！。</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                    <Link to="news2">
                        <li  className=" wow bounceInRight">
                            <img src={v2} alt=""/>
                            <h2>中国老龄协会领导莅临中汇祥龄公司考察调研。</h2>
                            <h5>中国老龄协会老年人才信息中心领导一行多人前往位于中央电视台梅地亚新闻中心10层/12层的中汇祥龄（北京）电子商务有限公司调研。</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                    <Link to="news3">
                        <li  className=" wow bounceInLeft">
                            <img src={v3} alt=""/>
                            <h2>银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴。</h2>
                            <h5>三方的战略合作，标志着聚合力服务老年产业发展的格局已经形成。三个战略合作伙伴均表示，本次合作迈出了资源共享、优势互补、诚实守信、开放公平、互利共赢的重要一步</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                    <Link to="news4">
                        <li  className=" wow bounceInRight">
                            <img src={v4} alt=""/>
                            <h2>老龄产业有望成为经济发展新增长点。</h2>
                            <h5>4月16日，中国老龄协会在京发布《需求侧视角下老年人消费及需求意愿研究报告》(以下简称《研究报告》)并召开专题研讨会。</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                    <Link to="news5">
                        <li  className=" wow bounceInLeft">
                            <img src={v5} alt=""/>
                            <h2>北京国龄中心与中航在京签约共建这样一平台！。</h2>
                            <h5>2019年5月20日，北京国龄智慧健康养老产业发展中心与中付航天科技创新数据中心（深圳）股份有限公司在北京签约，共建“互联网+养老生活服务平台”。</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                    <Link to="news6">
                        <li  className=" wow bounceInRight">
                            <img src={v6} alt=""/>
                            <h2>国务院办公厅印发《关于推进养老服务发展的意见。</h2>
                            <h5>新华社北京4月16日电 近日，国务院办公厅印发《关于推进养老服务发展的意见》（以下简称《意见》）。</h5>
                            <h4>2019-6-29</h4>
                        </li>
                    </Link>
                </ul>

                <Footer/>
            </div>
        )
    }
}
export default withRouter(Nav);









