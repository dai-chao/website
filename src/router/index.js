
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { HashRouter, Route,Switch} from "react-router-dom";
import App from "../App"
import Index from "../pages/index/index"
import Menu from "../pages/menu/index"
import About from "../pages/about/index"
import Pray from "../pages/proxy/index"
import Nav from "../pages/nav/index"
import Contact from "../pages/contact/index"
import News from "../pages/newsDetail/index"
import Newslist1 from "../pages/newsList/newsList1/index"
import Newslist2 from "../pages/newsList/newsList2/index"
import Newslist3 from "../pages/newsList/newsList3/index"
import Newslist4 from "../pages/newsList/newsList4/index"
import Newslist5 from "../pages/newsList/newsList5/index"
import Newslist6 from "../pages/newsList/newsList6/index"

export default class Router extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

// <Route  component={()=>{
//     return(
// <div>
//     404
//     </div>
// )
// }}/>
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ Index }/>
                        <Route path="/index" component={ Index }/>
                        <Route path="/menu" component={ Menu }/>
                        <Route path="/about" component={ About }/>
                        <Route path="/pray" component={ Pray }/>
                        <Route path="/nav" component={ Nav }/>
                        <Route path="/contact" component={ Contact }/>
                        <Route path="/news" component={ News }/>

                        <Route path="/news1" component={ Newslist1 }/>
                        <Route path="/news2" component={ Newslist2 }/>
                        <Route path="/news3" component={ Newslist3 }/>
                        <Route path="/news4" component={ Newslist4 }/>
                        <Route path="/news5" component={ Newslist5 }/>
                        <Route path="/news6" component={ Newslist6 }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}









