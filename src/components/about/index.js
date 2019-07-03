
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import {  Link,withRouter } from "react-router-dom";
import "./index.css?+Math.random()"
import aboutimg from "../../images/主页/home_us.jpg"

class About extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="about">
                <Link to="/about">
                <div className=" wow">
                    <h2 className=" wow bounceIn">- 关于我们 -</h2>
                    <img src={aboutimg} className="wow slideInUp" alt="图片丢了"/>
                    <h5 className="wow slideInUp">中汇祥龄电子商务(北京)有限公（ZHXL），由中付航天科技创新数据中心（深圳）股份有限公司旗下投资经营，集团在中国老年人才信息中心，中国老龄协会组织指导下，依托中国老龄学会所属北京国龄智慧健康养老产业发展中心共同搭建互联网+养老生活服务平台，旨在分担国家人口老龄化压力，减轻社会养老负担，贯彻国家新时代养老政策。</h5>
                </div>
                    
                </Link>
            </div>
        )
    }
}
export default withRouter(About)








