
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link,withRouter } from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import aboutimg from "../../images/主页/home_us.jpg"
import Footer from "../../components/footer/index"
import a1 from "../../images/关于我们/Product_img3.jpg"
import a2 from "../../images/关于我们/us_img1.jpg"
import a3 from "../../images/关于我们/us_img2.jpg"

class About extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="aboutBox">
                {this.props.children}
                <Header/>
                <Banner/>
                <div className="cla"></div>
                <h2 className="  wow slideInRight">- 关于我们 -</h2>
                <div className="abouts">
                    <img src={ a1 } alt="" className="  wow slideInLeft"/>
                    <h4 className="  wow slideInRight">中汇祥龄电子商务(北京)有限公（ZHXL）成立于2019年，由中付航天科技创新数据中心（深圳）股份有限公司旗下投资经营，集团在中国老年人才信息中心，中国老龄协会组织指导下，依托中国老龄学会所属北京国龄智慧健康养老产业发展中心共同搭建互联网+养老生活服务平台，旨在分担国家人口老龄化压力，减轻社会养老负担，贯彻国家新时代养老政策。</h4>
                </div>
                <div className="abouts">
                    <img src={ a2 } alt="" className="  wow slideInRight"/>
                    <h4 className="  wow slideInLeft">中汇祥龄电子商务(北京)有限公（ZHXL）成立于2019年，由中付航天科技创新数据中心（深圳）股份有限公司旗下投资经营，集团在中国老年人才信息中心，中国老龄协会组织指导下，依托中国老龄学会所属北京国龄智慧健康养老产业发展中心共同搭建互联网+养老生活服务平台，旨在分担国家人口老龄化压力，减轻社会养老负担，贯彻国家新时代养老政策。</h4>
                </div>
                <div className="abouts">
                    <img src={ a3 } alt="" className="  wow slideInLeft"/>
                    <h4 className="  wow slideInRight">中汇祥龄电子商务(北京)有限公（ZHXL）成立于2019年，由中付航天科技创新数据中心（深圳）股份有限公司旗下投资经营，集团在中国老年人才信息中心，中国老龄协会组织指导下，依托中国老龄学会所属北京国龄智慧健康养老产业发展中心共同搭建互联网+养老生活服务平台，旨在分担国家人口老龄化压力，减轻社会养老负担，贯彻国家新时代养老政策。</h4>
                </div>
                <h2 className="ab   wow slideInRight">- 合作机构 -</h2>
                <ul className="aboutList">
                    <li className="lian  wow slideInUp">全国老龄工作委员会办公室信息中心</li>
                    <li className="lian  wow slideInUp">北京国龄智慧健康养老产业发展中心</li>
                    <li className="lian  wow slideInUp">银河保险经纪（北京）有限责任公司</li>
                    <li className="lian  wow slideInUp">安邦保险集团股份有限公司</li>
                </ul>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(About);









