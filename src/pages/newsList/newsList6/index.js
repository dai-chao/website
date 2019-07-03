
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { withRouter} from "react-router-dom";
import "./index.css?+Math.random()"
import "../../../css/index2.css?+Math.random()"
import Header from "../../../components/header/index"
import Banner from "../../../components/banner/index"
import Footer from "../../../components/footer/index"

class NewsList6 extends Component{

    render(){
        return(
            <div className="news6Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                <div id="sixNews" className="news-box">
                    <h1 className="rich_media_title wow bounceInLeft">国务院办公厅印发《关于推进养老服务发展的意见》</h1>
                    <p className="pushtime wow bounceInLeft">发布时间：<span>2019-04-16</span></p>
                    <p className="introBottC wow fadeInUp">新华社北京4月16日电 近日，国务院办公厅印发《关于推进养老服务发展的意见》（以下简称《意见》）。
                    </p>
                    <p className="introBott wow fadeInUp">
                        《意见》指出，党中央、国务院高度重视养老服务。按照2019年政府工作报告对养老服务工作的部署，为打通“堵点”，消除“痛点”，破除发展障碍，健全市场机制，持续完善居家为基础、社区为依托、机构为补充、医养相结合的养老服务体系，确保到2022年在保障人人享有基本养老服务的基础上，有效满足老年人多样化、多层次养老服务需求，老年人及其子女获得感、幸福感、安全感显著提高，《意见》提出了六个方面共28条具体政策措施。
                    </p>
                    <p className="introBottC wow fadeInUp">
                        一是深化放管服改革。主要包括建立养老服务综合监管制度，继续深化公办养老机构改革，通过提高审批效能解决好养老机构消防审验问题，减轻养老服务税费负担，提升政府投入精准化水平，支持养老机构规模化、连锁化发展，做好养老服务领域信息公开和政策指引等7项措施。
                    </p>
                    <p className="introBott wow fadeInUp">
                        二是拓展养老服务投融资渠道。主要包括推动解决养老服务机构融资问题，扩大养老服务产业相关企业债券发行规模，全面落实外资举办养老服务机构国民待遇等3项措施。
                    </p>
                    <p className="introBottC wow fadeInUp">
                        三是扩大养老服务就业创业。主要包括建立完善养老护理员职业技能等级认定和教育培训制度，大力推进养老服务业吸纳就业，建立养老服务褒扬机制等3项措施。
                    </p>
                    <p className="introBott wow fadeInUp">
                        四是扩大养老服务消费。主要包括建立健全长期照护服务体系，发展养老普惠金融，促进老年人消费增长，加强老年人消费权益保护和养老服务领域非法集资整治工作等4项措施。
                    </p>
                    <p className="introBottC wow fadeInUp">
                        五是促进养老服务高质量发展。主要包括提升医养结合服务能力，推动居家、社区和机构养老融合发展，持续开展养老院服务质量建设专项行动，实施“互联网+养老”行动，完善老年人关爱服务体系，大力发展老年教育等6项措施。
                    </p>
                    <p className="introBott wow fadeInUp">
                        六是促进养老服务基础设施建设。主要包括实施特困人员供养服务设施（敬老院）改造提升工程，实施民办养老机构消防安全达标工程，实施老年人居家适老化改造工程，落实养老服务设施分区分级规划建设要求，完善养老服务设施供地政策等5项措施。
                    </p>
                    <p className="introBottC wow fadeInUp">
                        《意见》提出，国务院建立由民政部牵头的养老服务部际联席会议制度。各地、各有关部门要强化工作责任落实，健全党委领导、政府主导、部门负责、社会参与的养老服务工作机制。将养老服务政策落实情况纳入政府年度绩效考核范围。各地要充实、加强基层养老工作力量，强化区域养老服务资源统筹管理。
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        document.documentElement.scrollTop=0
    }
}
export default withRouter(NewsList6)








