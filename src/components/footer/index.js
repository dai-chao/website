
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css"

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div  className="footer">
                <h2 className="wow fadeInUp animated" data-wow-duration="0.5s" data-wow-delay="0.2s">Copyright © 2019. 中汇祥龄 All rights reserved</h2>
                {/*<h3>ICP证：京A-20080101</h3>*/}
            </div>
        )
    }
    componentDidMount(){
        // console.log(document.documentElement.scrollTop)
    }
}









