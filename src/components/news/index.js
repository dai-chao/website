
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { withRouter,Link} from "react-router-dom";
import "./index.css?+Math.random()"
import v1 from "../../images/新闻动态/news_2.jpg"
import n1 from "../../images/主页/news_1.jpg"

import n3 from "../../images/主页/news_3.jpg"
import n4 from "../../images/主页/news_4.jpg"

 class News extends Component{

    componentWillReceiveProps() {
        if (this.props.history.location !== this.props.location) {
            window.location.reload(true)
            
        }
    }
    render(){
        return(
            <div className="news">
                {/*<Link to="nav">*/}

                    <h2 className="  wow bounceIn"> - 新闻动态 -</h2>
                    <ul>
                        <a href="javascript:;">
                        <li className="  wow slideInUp">
                            <img src={v1} alt=""/>
                            <h2>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="javascript:;">
                        <li className="  wow slideInUp">
                            <img src={n3} alt=""/>
                            <h2>银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="javascript:;">
                        <li className="  wow slideInUp">
                            <img src={n1} alt="" className="n2"/>
                            <h2>中国老龄协会领导莅临中汇祥龄公司考察调研。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                        <a href="javascript:;">
                        <li className="  wow slideInUp">
                            <img src={n4} alt=""/>
                            <h2>北京国龄中心与中航在京签约共建这样一平台。</h2>
                            <h4>2019-6-29</h4>
                        </li>
                        </a>
                            <Link to="nav" className="more">查看更多</Link>
                    </ul>
                {/*</Link>*/}
            </div>
        )
    }
}
export default withRouter(News)







