import './Gallery.scss'
import React from 'react';

import { ImageBox } from '../ImageBox';

export function Gallery(props) {
    const { pictures, renderItem } = props;

    const renderItemdefault = (picture) => {
        return (
            <ImageBox key={picture.id} {...picture} />
        );
    }

    return (
        <main>
            <div className="container">
                {pictures.length === 0 && <span>Loading...</span>}
                {pictures.length > 0 &&
                    <div className="gallery">
                        {pictures.map(renderItem ? renderItem : renderItemdefault)}
                    </div>
                }
            </div>
        </main>
    )
}