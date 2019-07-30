import React, { Component, Fragment } from 'react'

import { Gallery } from 'components/Gallery';
import { Loader } from 'components/Loader';

export class GalleryContainer extends Component {
    state = { pictures: [], loading: false }

    componentDidMount() {
        this.setState({ loading: true });
        const { token } = this.props;
        fetch('http://localhost:8888/api/photos', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    pictures:
                        data.photos.map(photo => ({
                            id: photo._id,
                            image: photo.image,
                            likes: photo.likes.length,
                            comments: photo.comments.length,
                        }))
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            })
    }

    render() {
        const { pictures, loading } = this.state;
        return (
            <Fragment>
                {pictures.length > 0 && <Gallery pictures={pictures} />}
                {loading && <Loader />}
            </Fragment>
        )
    }
}
