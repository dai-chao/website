
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"

class News extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="newsd">
                {this.props.children}
                <Header/>

            </div>
        )
    }
}
export default withRouter(News);









