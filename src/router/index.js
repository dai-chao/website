
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import {HashRouter,Route,Switch} from "react-router-dom"
import App from "../App"
import Index from "../pages/index/index"

export default class Router extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ Index }/>
                        <Route path="/index" component={ Index }/>

                        <Route  component={()=>{
                            return(
                                <div>
                                    404
                                </div>
                            )
                        }}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}









