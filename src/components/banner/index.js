
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
            </div>
        )
    }
    componentDidUpdate() {
    }
}









