import React from 'react';
import {myBonusActions} from './MyBonusRedux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import MyBonus from '../components/MyBonus/MyBonus';
import {NavBar} from 'antd-mobile';
import {push} from 'react-router-redux';

@immutableRenderDecorator
@connect(state => {
    return {
        mybonus: state.get('MyBonus').get('MyBonus').toObject(),
    };
}, dispatch => ({
    mybounsActions: bindActionCreators(myBonusActions, dispatch)
}))
export default class Frame extends React.Component {

    render() {
        return (
                <div>
                    <NavBar
                        mode="light"
                        onLeftClick={() => {
                            this.props.history.push('/Home')
                        }}
                    >我的佣金</NavBar>
                    <MyBonus {...this.props.mybonus} {...this.props.mybounsActions}/>
                </div>
        );
    }
}