import React from 'react';
import {Icon} from 'antd-mobile';
import styles from './ImageLacyLoader.css';
import classnames from 'classnames';


export default class ImageLacyLoader extends React.Component {
    state = {
        src: this.props.src,
        visiable: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.src && nextProps.src !== this.state.src) {
            this.setState({src: nextProps.src, visiable: false});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.src !== this.state.src || this.state.visiable !== nextState.visiable;
    }

    componentDidMount() {

    }

    init() {
        const self = this;
        const img = new Image();
        img.onload = function () {
            self.setState({visiable: true});
        };
        img.onerror = function () {
            self.setState({visiable: false});
        };
        this.state.src ? img.src = this.state.src:{};
    }

    render() {
        this.init();
        const cx = classnames({
            [this.props.className]:true,
            [styles.box]:true
        });
        return (
            <div className={cx}>
                {this.state.visiable ?
                    <div className={styles.avatar} style={{'backgroundImage': `url('${this.state.src}')`}}/> :
                    <Icon className={styles.icon} type="loading"/>}
            </div>
        )
    }
}