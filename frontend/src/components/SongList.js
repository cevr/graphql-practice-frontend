import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

import { FETCH_SONGS } from '../graphql/queries';
import { DELETE_SONG } from '../graphql/mutations';

class SongList extends Component {
    onSongDelete = (deleteSong, id) => {
        deleteSong({
            variables: { id },
            refetchQueries: [{ query: FETCH_SONGS }]
        });
    };

    renderSongList = (queryResponse, deleteSong) => {
        const { loading, data } = queryResponse;

        return !loading ? (
            data.songs.map(({ title, id }) => (
                <Link key={id} to={`/detail/${id}`}>
                    <li className="collection-item flex justify-between pointer">
                        {title}
                        <i
                            className="material-icons pointer dim red-text"
                            onClick={() => this.onSongDelete(deleteSong, id)}
                        >
                            delete
                        </i>
                    </li>{' '}
                </Link>
            ))
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    };
    render() {
        return (
            <Mutation mutation={DELETE_SONG}>
                {(deleteSong, { data }) => (
                    <Query query={FETCH_SONGS}>
                        {queryResponse => (
                            <Fragment>
                                <ul className="collection">
                                    {this.renderSongList(
                                        queryResponse,
                                        deleteSong
                                    )}
                                </ul>
                                <Link
                                    to="/new"
                                    className="btn-floating btn-large red right grow"
                                >
                                    <i className="material-icons">add</i>
                                </Link>
                            </Fragment>
                        )}
                    </Query>
                )}
            </Mutation>
        );
    }
}

export default withRouter(SongList);
