
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../swiper/dist/css/swiper.min.css"
import ReactSwipe from 'react-swipe';
import "./index.css"
import banner1 from "../../images/主页/home_main_1.jpg"
import banner2 from "../../images/主页/home_main_2.jpg"
import banner3 from "../../images/主页/home_main_3.jpg"

export default class Banner extends Component{
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    render(){

        let opt = {
            auto: 1000,
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
                            <img src={ banner1 } alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={ banner2 } alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={ banner3 } alt=""/>
                        </div>
                    </ReactSwipe>
                    <div className="index-container">
                        <ul>
                            <li className={this.state.index === 0 ? 'selected': ''}></li>
                            <li className={this.state.index === 1 ? 'selected': ''}></li>
                            <li className={this.state.index === 2 ? 'selected': ''}></li>
                        </ul>
                    </div>
                </div>
                <ul className="dian">
                    <li className={this.state.index === 0 ? "re" : ""}></li>
                    <li className={this.state.index === 1 ? "re" : ""}></li>
                    <li className={this.state.index === 2 ? "re" : ""}></li>
                </ul>
                <ul className="txtbox">
                    <li className={this.state.index === 0 ? "txt" : "dis"}>
                        <p>便捷养老服务,</p>
                        <p>连锁化，综合化，品牌化运营,</p>
                        <p className="fon">真正做到为中国老年人服务，实现首个中国诚信第一、服务第一的综合化养老服务平台。</p>
                    </li>
                    <li className={this.state.index === 1 ? "txt" : "dis"}>
                        <p>系统开发，数据安全管理,</p>
                        <p>互联网通信研发，云平台数据对接,</p>
                        <p className="fon">真正实现高效、便民养老服务，为加快中国养老事业现代化进程助力。</p>
                    </li>
                    <li className={this.state.index === 2 ? "txt" : "dis"}>
                        <p>互联网+,</p>
                        <p>养老生活服务,</p>
                        <p className="fon">旨在分担国家人口老龄化压力，减轻社会养老负担，贯彻国家新时代养老政策。</p>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidUpdate() {
    }
}









