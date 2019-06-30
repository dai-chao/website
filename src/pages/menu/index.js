
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"

class Menu extends Component{
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
    /*<li> <Link to="nav">新闻动态</Link> </li>*/
    render(){
        return(
            <div className="me">
                {this.props.children}
                <Header/>
                <ul>
                    <Link to="/index"><li className="wow slideInUp"><Link to="/index">首页</Link></li></Link>
                    <Link to="/about"><li className="wow slideInUp"><Link to="/about">关于我们</Link></li></Link>
                    <Link to="/pray"><li className="wow slideInUp"><Link to="/pray">产品介绍</Link></li></Link>
                    <Link to="/pray"><li className="wow slideInUp"> <Link to="contact">联系我们</Link> </li></Link>
                </ul>
            </div>
        )
    }
}
export default withRouter(Menu);









