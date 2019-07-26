import './Gallery.scss'
import React from 'react';

import { ImageBox } from '../ImageBox/ImageBox';

export class Gallery extends React.Component {

    render() {
        const { pictures } = this.props;
        return (
            <div className="gallery">
                {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
            </div>
        )
    }
}