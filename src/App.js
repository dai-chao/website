/*
* date:2019/6/25/15:30;
* name:代超
*
* */

import React,{Component} from 'react';
//import { Link } from "react-router-dom"
import './App.css';

class App extends Component{
    render(){
        return(
            <div>
                {
                    this.props.children
                }
                {/*<Link to="index">index</Link><br/>*/}
                {/*<Link to="about">about</Link><br/>*/}
                {/*<Link to="contact">contact</Link><br/>*/}
                {/*<Link to="projects">projects</Link><br/>*/}
                {/*<Link to="services">services</Link><br/>*/}
                {/*<Link to="typography">typography</Link><br/>*/}
            </div>
        )
    }
}

export default App;
