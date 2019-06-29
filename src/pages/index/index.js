/*
* date:2019/6/25/15:30;
* name:代超
*
* */

import React,{ Component } from "react"
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import About from "../../components/about/index"
import Product from "../../components/product/index"
import News from "../../components/news/index"
import Footer from "../../components/footer/index"
import Menu from "../menu/index";


export default class Index extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <BrowserRouter>
                <Header >
                </Header>
                <Banner/>
                <About/>
                <Product/>
                <News/>
                <Footer/>
            </BrowserRouter>

        )
    }

}