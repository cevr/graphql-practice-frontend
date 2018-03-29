import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_LYRIC } from '../graphql/mutations';
import { FETCH_SONG } from '../graphql/queries';
class LyricCreate extends Component {
    state = { lyric: '' };
    onLyricSubmit = (event, addLyric) => {
        const { lyric } = this.state;
        const { id } = this.props;
        event.preventDefault();
        addLyric({
            variables: { content: lyric, id },
            refetchQueries: [{ query: FETCH_SONG, variables: { id } }]
        });
        this.setState({ lyric: '' });
    };
    render() {
        const { lyric } = this.state;
        return (
            <Mutation mutation={ADD_LYRIC}>
                {addLyric => (
                    <form
                        onSubmit={event => this.onLyricSubmit(event, addLyric)}
                    >
                        <label>Add a lyric</label>
                        <input
                            onChange={event =>
                                this.setState({ lyric: event.target.value })
                            }
                            value={lyric}
                        />
                    </form>
                )}
            </Mutation>
        );
    }
}

export default LyricCreate;
