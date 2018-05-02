import React from 'react';
import {Element} from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import styles from './Show.css';
import CssModules from 'react-css-modules';
import show_bg2 from '../images/show_bg2.png';
import show_bg4 from '../images/show_bg4.jpg';
import {Button} from 'antd-mobile';
import LogoGather from '../components/Show/LogoGather';

@CssModules(styles)
export default class DetailSwitchDemo extends React.Component {
    render() {
        // return (<div styleName="Banner-box" style={{height: document.documentElement.clientHeight}}>
        return (<div styleName="Banner-box">
            <LogoGather/>
            {/* <TweenOne styleName="banner-user-title" animation={{x: 30, opacity: 0, type: 'from', delay: 500}}>
                <img src={show_bg2} alt=""/>
            </TweenOne> */}
            {/* <TweenOne styleName="banner-user-button" animation={{y: 30, opacity: 0, type: 'from', delay: 800}}>
                <Button alt="" size="small" type="primary" onClick={() => {
                    this.props.history.push('Home')
                }}>神豆商城点击进入</Button>
            </TweenOne> */}
        </div>);
    }
}
