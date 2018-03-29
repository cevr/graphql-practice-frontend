import React from 'react';
import { Mutation } from 'react-apollo';
import { LIKE_LYRIC } from '../graphql/mutations';
import { FETCH_SONG } from '../graphql/queries';

const LyricList = ({ lyrics, songId }) => {
    console.log(lyrics);
    const onLyricLike = (likeLyric, id) => {
        likeLyric({
            variables: { id },
            refetchQueries: [{ query: FETCH_SONG, variables: { id: songId } }]
        });
    };
    return (
        <Mutation mutation={LIKE_LYRIC}>
            {likeLyric => (
                <ul className="collection">
                    {lyrics.map(({ content, id, likes }) => (
                        <li
                            key={id}
                            className="collection-item flex justify-between items-center"
                        >
                            {content}
                            <div className="flex justify-between items-center">
                                <i
                                    className="material-icons pointer dim blue-text"
                                    onClick={() => onLyricLike(likeLyric, id)}
                                >
                                    thumb-up
                                </i>
                                {likes}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Mutation>
    );
};

export default LyricList;
