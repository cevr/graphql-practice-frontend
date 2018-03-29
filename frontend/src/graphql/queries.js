import gql from 'graphql-tag';

export const FETCH_SONGS = gql`
    {
        songs {
            title
            id
        }
    }
`;

export const FETCH_SONG = gql`
    query FetchSong($id: ID!) {
        song(id: $id) {
            title
            lyrics {
                content
                likes
                id
            }
        }
    }
`;
