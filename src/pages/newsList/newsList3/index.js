
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { BrowserRouter, Route, Link ,withRouter} from "react-router-dom";
import "./index.css"
import "../../../css/index2.css"
import Header from "../../../components/header/index"
import Banner from "../../../components/banner/index"
import Footer from "../../../components/footer/index"
import three1 from "../../../images/news_imgs/threeNew_1.jpg"
import three2 from "../../../images/news_imgs/threeNew_2.jpg"
import three3 from "../../../images/news_imgs/threeNew_3.jpg"
import three4 from "../../../images/news_imgs/threeNew_4.jpg"
import three5 from "../../../images/news_imgs/threeNew_5.jpg"


class NewsList3 extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="news3Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                <div id="threeNews" className="news-box">
                    <h1> 北京国龄中心与中航在京签约共建这样一平台！</h1>
                    <p className="pushtime">发布时间：<span>2019-06-24</span></p>
                    <p className="introBott">
                        2019年5月20日，北京国龄智慧健康养老产业发展中心与中付航天科技创新数据中心（深圳）股份有限公司在北京签约，共建“互联网+养老生活服务平台”，该平台是在中国老龄协会老年人才信息中心指导下，以为老年人服务为核心宗旨，打造出互联网+养老服务的新型运营模式，由双方共建的中汇祥龄（北京）电子商务有限公司负责开发。
                    </p>
                    <p className="introBott">
                        据悉，北京国龄智慧健康养老产业发展中心隶属中国老龄协会老年人才信息中心，是经国家民政部门登记成立在册的国家级社会服务机构。“新时代智慧健康养老产业创新计划“是由信息中心倡导发起的面向全国的养老产业集群融合创新产业项目，旨在推动国家新时代养老政策的贯彻落实，构建新时代背景下智慧健康养老产业的创新模式。5月中上旬，该中心对中汇祥龄公司进行实地考察调研，经双方领导协商后达成共识，并于5月20日正式签订战略合作协议。今后双方将在”新时代智慧健康养老产业创新计划“的实施中，依据实际需求，就互联网+养老服务等相关领域进行广泛的合作，引导支持相关行业、企业围绕”新时代智慧健康养老产业创新计划“的具体要求开展服务。
                    </p>
                    <div><img src={three1} alt="新闻详情图"/></div>
                    <p className="introBott">
                        ▲ 北京国龄智慧健康养老产业发展中心与中付航天科技创新数据中心（深圳）股份有限公司在北京签约，共建“互联网+养老生活服务平台”。
                    </p>
                    <div><img src={three2} alt="新闻详情图"/></div>
                    <p className="introBott">
                        关于中国老龄协会老年人才信息中心
                    </p>
                    <p className="introBott">
                        中国老龄协会老年人才信息中心是全国老龄办直属单位。
                    </p>
                    <p className="introBott">
                        1996年，经中编办批准（中编发[1996]15号）成立中国老龄协会老年人才信息中心，其工作任务是：为促进老龄事业发展提供信息服务，老年人才信息网建设，人才招聘及信息提供，相关调研、培训与咨询业务。
                    </p>
                    <p className="introBott">
                        2007年10月，全国老龄工作委员会办公室委托中国老龄协会老年人才信息中心承担全国老龄办信息系统建设和管理工作（全国老龄办发[2007]43号）。
                    </p>
                    <p className="introBott">
                        2012年4月，全国老龄工作委员会办公室领导批准“全国老龄工作委员会办公室信息中心”和“中国老龄协会老年人才信息中心”为两块牌子，一套人员。
                    </p>
                    <p className="introBott">
                        以上资料来自公开发表的百度百科。
                    </p>
                    <div><img src={three3} alt="新闻详情图"/></div>
                    <div><img src={three4} alt="新闻详情图"/></div>
                    <div><img src={three5} alt="新闻详情图"/></div>
                    <p className="introBott"></p>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(NewsList3)








