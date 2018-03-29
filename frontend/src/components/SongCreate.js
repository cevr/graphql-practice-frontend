import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

import { FETCH_SONGS } from '../graphql/queries';
import { ADD_SONG } from '../graphql/mutations';
class SongCreate extends Component {
    state = {
        title: ''
    };
    componentWillUnmount() {
        this.setState({ title: '' });
    }
    onSubmit = (event, addSong) => {
        const { history } = this.props;
        const { title } = this.state;
        event.preventDefault();

        addSong({
            variables: { title },
            refetchQueries: [{ query: FETCH_SONGS }]
        }).then(() => history.push('/'));
    };
    render() {
        const { title } = this.state;
        return (
            <Mutation mutation={ADD_SONG}>
                {addSong => (
                    <Fragment>
                        <Link to="/">Back</Link>
                        <h3>Create a New Song</h3>
                        <form onSubmit={event => this.onSubmit(event, addSong)}>
                            <label>Song title:</label>
                            <input
                                onChange={event =>
                                    this.setState({ title: event.target.value })
                                }
                                value={title}
                            />
                        </form>
                    </Fragment>
                )}
            </Mutation>
        );
    }
}

export default withRouter(SongCreate);
