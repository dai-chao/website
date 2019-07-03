
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
import four1 from "../../../images/news_imgs/fourNew_1.jpg"
import four2 from "../../../images/news_imgs/fourNew_2.jpg"
import four3 from "../../../images/news_imgs/fourNew_3.jpg"
import four4 from "../../../images/news_imgs/fourNew_4.jpg"
import four5 from "../../../images/news_imgs/fourNew_5.jpg"
import four6 from "../../../images/news_imgs/fourNew_6.jpg"
import four7 from "../../../images/news_imgs/fourNew_7.jpg"
import four8 from "../../../images/news_imgs/fourNew_8.jpg"
import four9 from "../../../images/news_imgs/fourNew_9.jpg"

class NewsList4 extends Component{

    render(){
        return(
            <div className="news4Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                <div id="fourNews" className="news-box">
                    <h1 className="rich_media_title wow bounceInLeft">银河保险·国龄·中汇祥龄三方正式签约成战略合作伙伴</h1>
                    <p className="pushtime wow bounceInRight">发布时间：<span>2019-06-24</span></p>
                    <div><img className="imgd wow fadeInUp" src={four1} alt="新闻详情图"/></div>
                    <div><img className="imgd wow fadeInUp" src={four2} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        建设全国老年服务信用信息平台是深入贯彻“十三五”指示精神，构建和谐老龄社会，贯彻党中央、国务院“打造政务诚信、商务诚信、社会诚信，构建和谐老龄社会”的指示精神，是落实4月初国家老龄办王建军主任在老龄办党组会提出的高度关注、着力解决好老年消费陷阱，减少受骗上当等社会现象的工作要求，老年人才信息中心在中国老龄协会的领导下，搭建全国老年服务信用信息平台，为人口老龄化做出积极贡献。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four3} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        全国老年服务信用信息平台是一个意义深远的可持久性发展的平台，既关乎国家政策指示精神又关平老年人民生，因此，平台建成以后将是一个公益性非盈利性平合，一个关乎老年生活衣食住行各方面所需的信用信息展示及查询平台，它是服务老年信用信息国家级数据库，并服务社会信用体系建设的咨询台，是权威、专业、公正、信用的共享型服务窗口。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four4} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        为了加快“三大平台”各项目实现飞速发展，进一步使三大平台建设卓有成效，更好服务于老龄产业实现跨越式发展，6月19日，中付航天集团旗下的中汇祥龄电子商务(北京)有限公司与银河保险经纪（北京）有限责任公司、中国老龄协会老年人才信息中心所属的北京国龄智慧健康养老产业发展中心在北京正式签署三方战略合作协议。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four5} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        ▲
                        银河保险经纪（北京）有限责任公司总经理李亚童（左）、中国老龄协会老年人才信息中心专家委员会秘书长/北京国龄智慧健康养老产业发展中心主任成克庸（中）、中汇祥龄电子商务(北京)有限公司董事长亓玉刚（右）在6月19日于北京进行完三方签约后一起合影。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four6} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        据悉，银河保险经纪（北京）有限责任公司于2004年06月14日在北京市西城分局登记注册成立。银河保险经纪（北京）有限责任公司是中央汇金投资有限公司、国家财政部、全国社会保障基金理事会共同投资的中国银河金融控股有限责任公司旗下的从事保险经纪的国有专业公司，与各保险公司为业务合作单位。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four7} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        三方本着平等、资源、互利、互惠、诚信的原则，依照国家有关法律法规和政策方针，就三方开展全面合作，构建长期、紧密、稳定的合作关系。签约三方约定共同建立长期合作关系，属于重要的合作伙伴，优先为合作伙伴提供方便快捷的优惠服务，全力支持各自发展。在老年服务平台建设上，为广大老年人提供优质服务，包括但不限于线上线下服务、老年用品、生活产品、健康辅具等方面加强合作。
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four8} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        三方的战略合作，标志着聚合力服务老年产业发展的格局已经形成。三个战略合作伙伴均表示，本次合作迈出了资源共享、优势互补、诚实守信、开放公平、互利共赢的重要一步，今后三方将建立高效的沟通机制，紧密合作、资源共享，及时掌握相关产业信息，消除信息的时滞，达到资源的合理利用；在保险领域致力于推动相关险种的业绩增长，相互信任，信守承诺，为彼此的共同发展打下坚实的基础，实现共赢。“中汇祥龄”总经理葛小青表示，保险年销售额或将形成最大的界限突破业绩，为合作各方创造优势互补的业绩拉升！
                    </p>
                    <div><img className="imgd wow fadeInUp" src={four9} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp"></p>
                </div>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        document.documentElement.scrollTop=0
    }
}
export default withRouter(NewsList4)








