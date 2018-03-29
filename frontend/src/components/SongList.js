import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { FETCH_SONGS } from '../graphql/queries';
import { DELETE_SONG } from '../graphql/mutations';

class SongList extends Component {
    onSongDelete = (deleteSong, id) => {
        deleteSong({
            variables: { id },
            refetchQueries: [{ query: FETCH_SONGS }]
        });
    };
    renderSongList = (fetchSongs, deleteSong) => {
        const { loading, data } = fetchSongs;

        return !loading ? (
            data.songs.map(({ title, id }) => (
                <li className="collection-item flex justify-between" key={id}>
                    {title}
                    <i
                        className="material-icons pointer"
                        onClick={() => this.onSongDelete(deleteSong, id)}
                    >
                        delete
                    </i>
                </li>
            ))
        ) : (
            <div>Loading...</div>
        );
    };
    render() {
        return (
            <Mutation mutation={DELETE_SONG}>
                {(deleteSong, { data }) => (
                    <Query query={FETCH_SONGS}>
                        {fetchSongs => (
                            <Fragment>
                                <ul className="collection">
                                    {this.renderSongList(
                                        fetchSongs,
                                        deleteSong
                                    )}
                                </ul>
                                <Link
                                    to="/new"
                                    className="btn-floating btn-large red right"
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

export default SongList;
