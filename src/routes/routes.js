import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import QueueAnimRoute from './QueueAnimRoute';

export default class routes extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Route render={(props) => (<QueueAnimRoute {...props}/>)}/>
            </ConnectedRouter>

        );
    }
};




