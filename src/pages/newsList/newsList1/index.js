
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
import new1 from "../../../images/news_imgs/firstNew_1.jpg"
import new2 from "../../../images/news_imgs/firstNew_2.jpg"
import new3 from "../../../images/news_imgs/firstNew_3.jpg"
import new4 from "../../../images/news_imgs/firstNew_4.jpg"
import new5 from "../../../images/news_imgs/firstNew_5.jpg"
import new6 from "../../../images/news_imgs/firstNew_6.jpg"
import Footer from "../../../components/footer/index"

 class NewsList1 extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="news1Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                <div id="firstNews" className="news-box">
                    <h1>中汇祥龄协同老龄办筹划明星进社区宣导新时代智慧健康养老服务平台</h1>
                    <p className="pushtime">发布时间：<span>2019-06-24</span></p>
                    <p className="introBott">
                        随着我国深度老龄化社会的到来，老龄事业和养老产业也迎来了快速发展时期，为了进一步推进平台建设进程，营造全社会关注支持新时代智慧健康养老服务平台建设的积极良好氛围。日前，中汇祥龄与老龄办正着手筹划“明星进社区宣传新时代智慧健康养老服务平台”计划，预计计划实施后，届时将有众多影视明星为中汇祥龄大力推广宣传新时代智慧健康养老服务平台，中汇祥龄的品牌度及影响力将得到极大提升！
                    </p>
                    <div><img src={new1} alt="新闻详情图"/></div>
                    <p className="introBott">
                        据悉，该平台是国家在服务老年生活、服务老龄产业、服务国家老龄事业方面的基础性、共享性实用平台，中汇祥龄携手各方力量重磅打造一个国家级、专业型、共享式老龄生活服务平台，使得养老产业、老年人群或涉老行业在新时代智慧健康养老服务的共享平台上彰显更多更大价值。
                    </p>
                    <div><img src={new2} alt="新闻详情图"/></div>
                    <p className="introBott">
                        综合新时代智慧健康养老服务平台，未来将有望承担我国的新时代智慧健康养老信息服务的国家级平台、康养服务行业管理统一入口，以及新时代智慧健康养老服务资源大数据库的功能。
                    </p>
                    <div><img src={new3} alt="新闻详情图"/></div>
                    <p className="introBott">
                        依托该平台，不仅能整合和链接各类新时代智慧健康养老服务信息，方便公众浏览查询行业内容及服务信息，而且能实现各类新时代智慧健康养老服务机构和人员队伍的动态管理，加强行业服务和监管。
                    </p>
                    <p className="introBott">
                        还能够涵盖新时代智慧健康养老服务的需求、项目、队伍、设施和政策的综合数据，从而有效地服务社会公众、各类新时代智慧健康养老服务机构，以及相关政府与行业管理部门。
                    </p>
                    <p className="introBott">
                        据悉，平台的建成，将支撑全人群覆盖、全方位服务、全过程管理、全天候响应的智慧养老体系，社会意义和价值巨大。
                    </p>
                    <div><img src={new4} alt="新闻详情图"/></div>

                    <p className="introBott">
                        随着我司近期各个项目的按计划稳步推进，地推团队也在逐步壮大中，尤其在2019年山东市场首届招商座谈会的圆满举办以来，各项工作取得了可喜的成绩，山东市场的模范带头引领力量，拉动了全国市场的同步跟进，希望全国各地股东再接再厉，更上一层楼，将地堆团队做大做强！目前很多有团队的公司正在和我司进行洽谈，强强联手！行业精英也在考察对接中！希望各位股东认清企业蓬勃发展的主流和大趋势，开足马力，奋勇直追，为航久共创新时代智慧健康养老服务世纪工程添砖加瓦！
                    </p>
                    <div><img src={new5} alt="新闻详情图"/></div>
                    <p className="introBott">
                        另据报道，为进一步推动商业服务业提质增效，推进行业健康发展，国家商务部日前向我司发来邀请，邀请我司所属中汇祥龄公司派员参加6月27日在国家商务部流通产业促进中心一层会议室召开的商业服务业业务评价指标与星级划分标准的专家级座谈会，这次国家商务部邀请中汇祥龄公司代表参加共商信用评级事宜，也从一个侧面彰显了中汇祥龄公司在政企合作之路上开拓了具有战略引领意义的先河，为今后各方面项目合作奠定了坚实的基础。
                    </p>
                    <div><img src={new6} alt="新闻详情图"/></div>
                    <p className="introBott"></p>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(NewsList1)








