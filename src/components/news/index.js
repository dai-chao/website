
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import n1 from "../../images/主页/news_1.jpg"
import n2 from "../../images/新闻动态/image-news.jpg"
import n3 from "../../images/主页/news_3.jpg"
import n4 from "../../images/主页/news_4.jpg"

 class News extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="news">
                {/*<Link to="nav">*/}

                    <h2 className=" fl wow bounceIn"> - 新闻动态 -</h2>
                    <ul>
                        <a href="https://mp.weixin.qq.com/s/w3Yg6t-sE8P1ZRBH8H850Q">
                        <li className=" fl wow slideInUp">
                            <img src={n1} alt=""/>
                            <h2>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="https://mp.weixin.qq.com/s/8wPPOJgBRqWys6r5d3X0zA">
                        <li className=" fl wow slideInUp">
                            <img src={n2} alt="" className="n2"/>
                            <h2>中国老龄协会领导莅临中汇祥龄公司考察调研。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="https://mp.weixin.qq.com/s/EFOxA44XKqXeUnqNuXjePQ">
                        <li className=" fl wow slideInUp">
                            <img src={n3} alt=""/>
                            <h2>北京国龄中心与中航在京签约共建这样一平台。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="https://mp.weixin.qq.com/s/VGesHZ2rADdNx964FMK1hw">
                        <li className=" fl wow slideInUp">
                            <img src={n4} alt=""/>
                            <h2>银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                            {/*<Link to="">查看更多</Link>*/}
                    </ul>

                {/*</Link>*/}
            </div>
        )
    }
}
export default withRouter(News)







