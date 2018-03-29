import gql from 'graphql-tag';

export const FETCH_SONGS = gql`
    {
        songs {
            title
            id
        }
    }
`;
