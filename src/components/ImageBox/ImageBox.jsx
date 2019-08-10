import './ImageBox.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { LikesCount } from 'components/LikesCount';
import { CommentsCount } from 'components/CommentsCount';
export class ImageBox extends Component {
    render() {
        const { image, likes, comments, id } = this.props;
        return (
            <Link to={`posts/${id}`}>
                <div className="gallery-item" tabIndex="0">
                    <img src={image} className="gallery-image" alt="" />
                    <div className="gallery-item-info">
                        <ul>
                            <LikesCount likes={likes} />
                            <CommentsCount comments={comments} />
                        </ul>
                    </div>
                </div>
            </Link>
        );
    }
}