
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../../components/header/index"
import Banner from "../../../components/banner/index"

class NewsList5 extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="news5Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                newslist5
            </div>
        )
    }
}
export default withRouter(NewsList5)








