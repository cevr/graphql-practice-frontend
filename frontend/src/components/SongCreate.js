import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

import { fetchSongs } from '../queries/queries';

class SongCreate extends Component {
    state = {
        title: ''
    };
    componentWillUnmount() {
        this.setState({ title: '' });
    }
    onSubmit = event => {
        const { mutate, history } = this.props;
        const { title } = this.state;
        event.preventDefault();

        mutate({
            variables: { title },
            refetchQueries: [{ query: fetchSongs }]
        }).then(() => history.push('/'));
    };
    render() {
        const { title } = this.state;
        return (
            <div>
                <Link to="/" exact>
                    Back
                </Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song title:</label>
                    <input
                        onChange={event =>
                            this.setState({ title: event.target.value })
                        }
                        value={title}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default withRouter(graphql(mutation)(SongCreate));
