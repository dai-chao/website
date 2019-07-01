
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import {  Link ,withRouter} from "react-router-dom";
import logo from "../../images/log03.jpg"
import "./index.css"
import "../../iconfont/font_go4u9iqd7sg/iconfont.css"

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentWillReceiveProps() {
        if (this.props.history.location !== this.props.location) {
            window.location.reload(true)
            
        }
    }
    // handclick(){
    //     if(window.location.href.indexOf("menu") == 1){
    //         window.history.go(-1)
    //     }
    //
    // }
    render(){
        return(
            <header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu" >
                    <Link className="alignLeft" to="/menu">
                        <span className="icon iconfont icon-weibiaoti12"></span>
                    </Link>
                </div>
            </header>
        )
    }
}


export default withRouter(Header)









