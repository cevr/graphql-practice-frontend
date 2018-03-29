import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import { FETCH_SONG } from '../graphql/queries';
import { withRouter } from 'react-router-dom';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = ({ data, match }) => {
    const { id } = match.params;
    return (
        <Query query={FETCH_SONG} variables={{ id }}>
            {({ loading, data }) => {
                return !loading ? (
                    <Fragment>
                        <h3>{data.song.title}</h3>
                        <LyricList lyrics={data.song.lyrics} songId={id} />
                        <LyricCreate id={id} />
                    </Fragment>
                ) : (
                    <div className="center flex flex-column self-center justify-center">
                        <h1>Loading...</h1>
                    </div>
                );
            }}
        </Query>
    );
};

export default withRouter(SongDetail);
