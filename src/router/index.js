
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import App from "../App"
import Index from "../pages/index/index"
import Menu from "../pages/menu/index"

export default class Router extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ Index }/>
                        <Route path="/index" component={ Index }/>
                        <Route path="/index/menu" component={ Menu }/>
                        <Route  component={()=>{
                            return(
                                <div>
                                    404
                                </div>
                            )
                        }}/>
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}









