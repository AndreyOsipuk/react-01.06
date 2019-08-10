import './Comments.scss';

import React, { PureComponent } from 'react';

export class Comments extends PureComponent {
    render() {
        const { comments } = this.props;
        return (
            <ul>
                {comments.map((comment, idx) => <li key={idx}>{comment.author}: {comment.text}</li>)}
            </ul>
        );
    }
}