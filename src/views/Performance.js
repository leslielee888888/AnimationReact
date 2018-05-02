import React from 'react';
import {performanceActions} from './PerformanceRedux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {NavBar} from 'antd-mobile';
import Performance from '../components/Performance/Performance'
@immutableRenderDecorator
@connect(state => {
    return {
        performance: state.get('Performance').get('Performance').toObject(),
    };
}, dispatch => ({
    performanceActions: bindActionCreators(performanceActions, dispatch)
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
                    >佣金明细</NavBar>
                    <Performance  {...this.props.performance} {...this.props.performanceActions}/>
                </div>
        );
    }
}