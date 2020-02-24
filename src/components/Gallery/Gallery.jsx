import './Gallery.scss'

import React, { Component, useEffect, Fragment } from 'react';

import { ImageBox } from '../ImageBox';

export function Gallery(props) {
    const { pictures, renderItem, onScroll } = props;
    const handleScroll = () => {

        if (parseInt(Math.ceil(window.innerHeight + document.documentElement.scrollTop)) != document.documentElement.offsetHeight) {
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

    const renderItemdefault = (picture, idx) => {
        return (
                <ImageBox key={idx} {...picture} />
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