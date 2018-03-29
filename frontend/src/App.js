import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import SongList from './components/SongList';
// import Home from './container/Home';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import NotFound from './components/NotFound';
import Navigator from './components/Navigator';

class App extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="container">
                <Navigator location={location.pathname} />
                <Switch>
                    <Redirect to="/songs" from="/" exact />

                    <Route path="/songs" component={SongList} />
                    <Route path="/new" component={SongCreate} />
                    <Route path="/detail/:id" component={SongDetail} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
