import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import QueueAnim from 'rc-queue-anim';
import {routeCfg} from './routeConfig';

const animGoConfig = [
    {opacity: [1, 1], translateX: [0, document.documentElement.clientWidth]},
    {opacity: [1, 1], translateX: [0, -document.documentElement.clientWidth]}
];
const animBackConfig = [
    {opacity: [1, 1], translateX: [0, -document.documentElement.clientWidth]},
    {opacity: [1, 1], translateX: [0, document.documentElement.clientWidth]}
];
export default class QueueAnimRoute extends React.Component {
    state = {
        component: null
    };

    constructor(props) {
        super(props);
        this.state = {
            component: this.getComponent(props.location)
        };
        this.cachePathname = [props.location.pathname];
        this.animConfig = animGoConfig;
    };

    shouldComponentUpdate(nextProps){
        return !!this.getComponent(nextProps.location) ;
    }

    componentWillReceiveProps(nextProps) {
        if (this.cachePathname.length === 2 && nextProps.location.pathname === this.cachePathname[0]) {
            this.setState({isBack: true});
            this.animConfig = animBackConfig;
            this.cachePathname = [];
        } else {
            this.setState({isBack: false});
            this.animConfig = animGoConfig;
        }
        this.setState({component: this.getComponent(nextProps.location)});
        this.cachePathname.push(nextProps.location.pathname);
        this.cachePathname.length > 2 && this.cachePathname.shift();
    }

    getComponent = (location) => {
        return routeCfg.map(item => {
            if (location.pathname === item.to) {
                return item.component;
            }
        }).filter((item) => {
            return item
        })[0];
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (<Redirect to="/Show"/>)}/>
                <QueueAnim type={['right', 'left']}
                           animConfig={this.animConfig}
                           duration={500}
                           appear={false}
                >
                    {this.state.component &&<Route
                        location={this.props.location}
                        key={this.props.location.pathname}
                        path="/:url"
                        component={this.state.component}
                    />}
                </QueueAnim>
            </div>
        );
    }
};




