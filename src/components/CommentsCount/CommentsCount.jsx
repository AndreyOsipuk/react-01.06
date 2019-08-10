import React from 'react';

export class CommentsCount extends React.Component {
    render() {
        const { comments } = this.props;
        return (
            <li className="gallery-item-comments"><span className="visually-hidden">Likes:</span><i className="fas fa-heart"
                aria-hidden="true"></i> {comments}</li>
        )
    }
}