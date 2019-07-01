
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { withRouter} from "react-router-dom";
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import e1 from "../../images/联系我们/erweima.jpg"
import Footer from "../../components/footer/index"


class Contact extends Component{
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
    render(){
        return(
            <div className="contact">
                {this.props.children}
                <Header/>
                <Banner/>
                <h5 className="wow bounceIn"> - 联系我们 -</h5>
                <ul className="wow slideInUp">
                    <li className="wow slideInUp">电话：010-68570339</li>
                    <li className="wow slideInUp">地址：北京市 丰台区 汉威国际广场 三区5栋</li>
                    <li className="wow slideInUp">邮箱：zhxl_yl@163.com</li>
                </ul>
                <img src={e1} alt="" className="wow slideInUp"/>
                <h3 className="wow slideInUp">关注订阅号“祥龄资讯</h3>
                <p className="wow slideInUp">获取更多资讯</p>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Contact);









