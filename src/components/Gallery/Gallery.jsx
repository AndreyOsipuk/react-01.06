import './Gallery.scss'

import React, { Component, useEffect, Fragment } from 'react';

import { ImageBox } from '../ImageBox';

export function Gallery(props) {
    const { pictures, renderItem, onScroll, loading } = props;
    const handleScroll = () => {
        if (parseInt(window.innerHeight + document.documentElement.scrollTop) != document.documentElement.offsetHeight) {
            return;
        }
        
        if (typeof onScroll == 'function') {
            onScroll();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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