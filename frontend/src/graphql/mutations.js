import gql from 'graphql-tag';

export const ADD_SONG = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export const DELETE_SONG = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export const ADD_LYRIC = gql`
    mutation AddLyricToSong($content: String!, $id: ID!) {
        addLyricToSong(content: $content, songId: $id) {
            lyrics {
                content
                song
            }
        }
    }
`;

export const LIKE_LYRIC = gql`
    mutation LikeLyric($id: ID!) {
        likeLyric(id: $id) {
            likes
        }
    }
`;
