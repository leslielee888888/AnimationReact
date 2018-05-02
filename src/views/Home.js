import React from 'react';
import style from './Home.css';
import {menuActions} from './HomeRedux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import Menu from '../components/Home/Menu';

@immutableRenderDecorator
@connect(state => {
    return {
        menu: state.get('Home').get('Menu').toObject()
    };
}, dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch)
}))
export default class Frame extends React.Component {
    render() {
        //alert(document.documentElement.clientWidth);
        return (
            <div>
                <Menu {...this.props.menu} {...this.props.menuActions}/>
            </div>
        );
    }
}