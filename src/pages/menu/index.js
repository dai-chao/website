
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { Link ,withRouter} from "react-router-dom";
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

    // className="wow slideInUp list"
    render(){
        return(
            <div className="me">
                {this.props.children}
                <Header/>
                <ul>
                    <Link  to="/index"><li>首页</li></Link>
                    <Link  to="/about"><li>关于我们</li></Link>
                    <Link  to="/pray"><li>产品介绍</li></Link>
                    <Link  to="/contact"><li> 联系我们</li></Link>
                </ul>
            </div>
        )
    }
}
export default withRouter(Menu);









