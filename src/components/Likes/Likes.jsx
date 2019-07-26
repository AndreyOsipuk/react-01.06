import './Likes.scss';
import React from 'react';

export class Likes extends React.Component {
    render() {
        const { likes } = this.props;
        return (
            <li className="gallery-item-likes"><span className="visually-hidden">Comments:</span><i className="fas fa-comment"
                aria-hidden="true"></i> {likes}</li>
        )
    }
}