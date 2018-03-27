import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { fetchSongs } from '../queries/queries';
class SongList extends Component {
    renderSongList = () => {
        const { songs, loading } = this.props.data;
        return !loading ? (
            songs.map(song => (
                <li className="collection-item" key={song.id}>
                    {song.title}
                </li>
            ))
        ) : (
            <div>Loading...</div>
        );
    };
    render() {
        return (
            <div>
                <ul className="collection">{this.renderSongList()}</ul>
                <Link to="/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

export default graphql(fetchSongs)(SongList);
