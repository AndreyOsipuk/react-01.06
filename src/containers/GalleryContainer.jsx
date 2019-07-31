import React, { Component, Fragment } from 'react'

import { Gallery } from 'components/Gallery';
import { Loader } from 'components/Loader';

export class GalleryContainer extends Component {
    state = { pictures: [], loading: false, page: 1, total: null }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        this.setState({ loading: true });
        const { token } = this.props;
        const { page } = this.state;
        const count = this.state.pictures.length;
        fetch(`http://localhost:8888/api/photos?page=${page}&count=${count}&limit=6`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    loading: false,
                    page: prevState.page + 1,
                    total: data.total,
                    pictures:
                        prevState.pictures.concat(
                            data.photos.map(photo => ({
                                id: photo._id,
                                image: photo.image,
                                likes: photo.likes.length,
                                comments: photo.comments.length,
                            }))
                        ),
                }));
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            })
    }

    shouldWeLoad = () => {
        const { pictures, loading, total } = this.state;
        return ((total != null || total > pictures.length) && !loading)
    }

    handleScroll = () => {
        if (this.shouldWeLoad) {
            this.loadItems()
        }
    }

    render() {
        const { pictures, loading } = this.state;
        return (
            <Fragment>
                {/* <select id="count">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select> */}
                {pictures.length > 0 && <Gallery loading={this.state.loading} onScroll={this.handleScroll} pictures={pictures} />}
                {loading && <Loader />}
            </Fragment>
        )
    }
}
