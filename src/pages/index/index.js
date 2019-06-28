/*
* date:2019/6/25/15:30;
* name:代超
*
* */

import React,{ Component } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"


export default class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
            </div>
        )
    }

}