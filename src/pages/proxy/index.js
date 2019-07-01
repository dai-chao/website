
/*
* date:2019/6/25/15:30;
* name:代超
*
* */
import React,{ Component } from "react"
import { withRouter} from "react-router-dom"
import "./index.css"
import Header from "../../components/header/index"
import Banner from "../../components/banner/index"
import p1 from "../../images/产品介绍/Product_img1.jpg"
import p2 from "../../images/产品介绍/Product_img2.jpg"
import p3 from "../../images/产品介绍/Product_img3.jpg"
import p4 from "../../images/产品介绍/Product_img4.jpg"
import Footer from "../../components/footer/index"
import 'animate.css'
import { WOW } from 'wowjs';
new WOW({live: false}).init();

class Pray extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <div className="prayBox">
                <Header/>
                <Banner/>
                <h2 className="wow bounceIn"> -  产品介绍  -</h2>
                <ul>
                    <li>
                        <h5 className="wow slideInUp">全国老年服务信息信用平台</h5>
                        <img src={p1} alt="" className="wow slideInUp"/>
                        <p className="wow slideInUp">全国老年服务信用信息平台”是中国老龄协会老年人才信息中心主办，北京国龄智慧健康养老产业发展中心，中汇祥龄电子商务（北京）有限公司承办，通过对养老机构、组织、老年产（用）品、为老服务从业人员等信用服务信息的归集、发布、利用，政府涉老部门、相关专业信用门户网站互联互通，向社会公众提供“一站式”的查询服务；是老龄协会服务政府、机构、个人的权威、专业、公正、实用的共享型服务窗口；是老年服务社会信用体系建设领域服务的“咨询台”，是老年服务领域沟通社情民意、推进信用信息公开的“数据库”。全国老年服务信用信息平台将建设成为老服务的最具公信力的信用信息平台，通过三方监管、推荐的形式展示优质的老年产品及所需服务查询</p>
                    </li>
                    <li>
                        <h5 className="wow slideInUp">新时代智慧健康养老服务平台</h5>
                        <img src={p2} alt="" className="wow slideInUp"/>
                        <p className="wow slideInUp">新时代智慧健康养老服务平台是在中国老龄协会老年人才信息中心指导下，为贯彻习总书记日前对加强老龄工作作出重要指示，依托“互联网+”提供“点菜式”就近便捷养老服务，提高中国老年人养老生活质量，应对中国社会老龄化问题而建设的智慧养老服务平台，让老年人真正老有所养老有所依，提高老年人养老福利。
                            新时代智慧健康养老服务平台将包括生活消费，健康医疗，商业金融，文教体娱，社交互动等四大板块内容，涵盖老年人日常所需的便捷实用服务。</p>
                    </li>
                    <li>
                        <h5 className="wow slideInUp">北三县电商下乡扶贫项目</h5>
                        <img src={p3} alt="" className="wow slideInUp"/>
                        <p className="wow slideInUp">北三县电商下乡扶贫项目是以廊坊市下辖的三河市、大厂回族自治县、香河县三个县城作为商务部电商下乡试点，提供电商产品线上和线下的整体解决方案。帮助北三县建立了700家便民超市，支持从供应商采购到终端配送的全流程服务；同时将北三县纳入到养老服务平台的供应商队伍，既解决了北三县扶贫需求又提高了当地留守老人的生活质量和经济收入
                            以高标准、高质量、高效率建设，尽快投产见效，为当地经济发展做出贡献，也为首都经济圈的繁荣发展添砖加瓦，为推进京津冀地区协同发展工作走向深入贡献力量</p>
                    </li>
                    <li>
                        <h5 className="wow slideInUp">无忧养老康养项目</h5>
                        <img src={p4} alt="" className="wow slideInUp"/>
                        <p className="wow slideInUp">由中国老龄协会老年人才信息中心牵头，安邦保险集团、北京国龄智慧健康养老产业发展中心、中汇祥龄电子商务（北京）有限公司、中国银河经纪公司联合签署战略合同，联合打造一款适合消费型养老保险产品——无忧养老康养项目，旨在提高老年人幸福生活指数，增加为老、防老、养老的抗风险能力，并委托新时代智慧健康养老服务平台统一运营</p>
                    </li>
                </ul>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Pray);









