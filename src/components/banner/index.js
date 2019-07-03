
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
// import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../swiper/dist/css/swiper.min.css"
import ReactSwipe from 'react-swipe';
import "./index.css?+Math.random()"
import banner1 from "../../images/主页/home_main_1.jpg"
import banner2 from "../../images/主页/home_main_2.jpg"
import banner3 from "../../images/主页/home_main_3.jpg"
import banner4 from "../../images/主页/banner4.png"

export default class Banner extends Component{
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    render(){

        let opt = {
            auto: 3000,
            callback: function(index) {
                // console.log(index);
                this.setState({index: Number(index)})
            }.bind(this)
        };
        return(
            <div className="bannerBox">
                <div id="home-category">
                    <ReactSwipe className="carousel" swipeOptions={opt}>
                        <div className="carousel-item">
                            <img src={ banner3 } alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={ banner1 } alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={ banner4 } alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={ banner2 } alt=""/>
                        </div>
                    </ReactSwipe>
                    <div className="index-container">
                        <ul>
                            <li className={this.state.index === 0 ? 'selected': ''}></li>
                            <li className={this.state.index === 1 ? 'selected': ''}></li>
                            <li className={this.state.index === 2 ? 'selected': ''}></li>
                            <li className={this.state.index === 3 ? 'selected': ''}></li>
                        </ul>
                    </div>
                </div>
                <ul className="dian">
                    <li className={this.state.index === 0 ? "re" : ""}></li>
                    <li className={this.state.index === 1 ? "re" : ""}></li>
                    <li className={this.state.index === 2 ? "re" : ""}></li>
                    <li className={this.state.index === 3 ? "re" : ""}></li>
                </ul>
                <ul className="txtbox">
                    <li className={this.state.index === 0 ? "txt" : "dis"}>
                        <p>全国老年信用信息平台</p>
                        {/*<p>连锁化，综合化，品牌化运营</p>*/}
                        <p className="fon">由中国老龄协会老年人才信息中心主办，北京国龄智慧健康养老产业发展中心，中汇祥龄电子商务（北京）有限公司承办，打造的一款老年服务社会信用体系 “数据咨询台</p>
                    </li>
                    <li className={this.state.index === 1 ? "txt" : "dis"}>
                        <p>新时代智慧健康养老服务平台</p>
                        {/*<p>互联网通信研发，云平台数据对接</p>*/}
                        <p className="fon">由中国老龄协会老年人才信息中心牵头，中汇祥龄电子商务（北京）有限公司协办建设的智慧养老服务平台</p>
                    </li>
                    <li className={this.state.index === 2 ? "txt" : "dis"}>
                        <p>北三县电商下乡扶贫项目</p>
                        {/*<p>养老生活服务</p>*/}
                        <p className="fon">国家电商扶贫项目，以北三县为试点展开</p>
                    </li>
                    <li className={this.state.index === 3 ? "txt" : "dis"}>
                        <p>无忧养老康养项目</p>
                        {/*<p>养老生活服务</p>*/}
                        <p className="fon">中国老龄委人才信息发展中心,安邦保险集团,中国银河保险经纪公司中汇祥龄子商务（北京）有限公司联合打造一款消费型养老保险产品"安邦万能养老消费保险"</p>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidUpdate() {
    }
}









