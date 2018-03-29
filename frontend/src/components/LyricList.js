import React from 'react';
import { Mutation } from 'react-apollo';
import { LIKE_LYRIC } from '../graphql/mutations';

const LyricList = ({ lyrics, songId }) => {
    const onLyricLike = (likeLyric, id, likes) => {
        likeLyric({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
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
                                Likes: {likes}
                                <i
                                    className="material-icons pointer dim blue-text ml2"
                                    onClick={() =>
                                        onLyricLike(likeLyric, id, likes)
                                    }
                                >
                                    thumb_up
                                </i>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Mutation>
    );
};

export default LyricList;
