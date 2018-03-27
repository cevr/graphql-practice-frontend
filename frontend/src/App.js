import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SongList from './components/SongList';
// import Home from './container/Home';
import SongCreate from './components/SongCreate';

class App extends Component {
    render() {
        return (
            <Switch>
                <div className="container">
                    <Route path="/" exact component={SongList} />
                    <Route path="/new" component={SongCreate} />
                </div>
            </Switch>
        );
    }
}

export default App;
