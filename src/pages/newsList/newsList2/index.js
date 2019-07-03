
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
import newst1 from "../../../images/news_imgs/towNew_1.jpg"
import newst2 from "../../../images/news_imgs/towNew_2.jpg"
import newst3 from "../../../images/news_imgs/towNew_3.jpg"
import newst4 from "../../../images/news_imgs/towNew_4.jpg"
import newst5 from "../../../images/news_imgs/towNew_5.jpg"
import Footer from "../../../components/footer/index"

class NewsList2 extends Component{

    render(){
        return(
            <div className="news2Box">
                <Header/>
                <Banner/>
                <div className="clear"></div>
                <div id="towNews" className="news-box">
                    <h1 className="rich_media_title wow bounceInLeft">中国老龄协会领导莅临中汇祥龄公司考察调研!</h1>
                    <p className="pushtime wow bounceInRight">发布时间：<span>2019-04-16</span></p>
                    <div className="imgd wow fadeInUp"><img src={newst1} alt="新闻详情图"/></div>
                    <div className="briefNews wow fadeInUp">
                        <p className="introTop">
                            公司简讯：
                        </p>
                        <p className="introBottC">
                            日前，中国老龄协会老年人才信息中心领导一行多人前往位于中央电视台梅地亚新闻中心10层/12层的中汇祥龄（北京）电子商务有限公司调研，参观考察了专注于为老服务的中汇祥龄（北京）电子商务有限公司，听取了中汇祥龄公司关于互联网+养老生活服务平台筹备情况的汇报。中汇祥龄公司董事长亓玉刚等人陪同考察并向信息中心领导一行汇报了为老服务平台前期的相关筹备工作。会上，中国老龄协会老年人才信息中心领导对中汇祥龄（北京）电子商务有限公司“为老服务”的工作方向给予了高度的赞誉和肯定，并对“中汇祥龄”公司下一步发展老年康养事业提出了具体的意见和要求。
                        </p>
                    </div>
                    <div className="imgd wow fadeInUp"><img src={newst2} alt="新闻详情图"/></div>
                    <p className="introBott">
                        ▲ 中国老龄协会老年人才信息中心总工程师 李强 发言
                    </p>
                    <div className="imgd"><img src={newst3} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        ▲ 中国老龄协会老年人才信息中心专家委员会秘书长、北京国龄智慧健康养老产业发展中心主任 成克庸 发言
                    </p>
                    <div className="imgd wow fadeInUp"><img src={newst4} alt="新闻详情图"/></div>
                    <p className="introBott wow fadeInUp">
                        ▲ 中汇祥龄公司领导班子在亓玉刚董事长带领下做集体汇报。
                    </p>
                    <div className="imgd wow fadeInUp"><img src={newst5} alt="新闻详情图"/></div>
                    <p className="introBottC wow fadeInUp">
                        中航集团进入新时代实现新作为
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
export default withRouter(NewsList2)








