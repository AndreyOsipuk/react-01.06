import './CommentsHoc.scss';

import React, { PureComponent } from 'react';

import { CommentsForm } from 'components/CommentsForm';
import { Comments } from 'components/Comments';

export class CommentsHoc extends PureComponent {
    state = { comments: [] };

    handleSend = (message) => {
        const comments = this.state.comments.concat([message])
        this.setState({comments})
    }

    render() {
        const { comments } = this.state;
        return (
            <>
                <Comments comments={comments} />
                <CommentsForm onSend={this.handleSend}/>
            </>
        );
    }
}