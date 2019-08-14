import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Gallery } from 'components/Gallery';
import { Loader } from 'components/Loader';
import { Profile } from 'components/Profile';

import { PostContainer } from 'containers/PostContainer';
import { load } from 'actions/pictures';

class GalleryUnmounted extends Component {
    // state = {
    //     pictures: [],
    //     loading: false,
    //     page: 1,
    //     total: null,
    //     id: localStorage.getItem('id'),
    //     token: localStorage.getItem('token'),
    // }

    componentDidMount() {
        const { loadImages } = this.props;
        loadImages();
        // if (!localStorage.getItem('token')) {
        //     return this.props.history.replace('/auth');
        // }
        // this.loadItems();
    }

    // loadItems = () => {
    //     this.setState({ loading: true });
    //     const { page, token } = this.state;
    //     fetch(`http://localhost:8888/api/photos?page=${page}&limit=6`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${token}`,
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState(prevState => ({
    //                 loading: false,
    //                 page: prevState.page + 1,
    //                 total: data.total,
    //                 pictures:
    //                     prevState.pictures.concat(
    //                         data.photos.map(photo => ({
    //                             id: photo._id,
    //                             image: photo.image,
    //                             likes: photo.likes.length,
    //                             comments: photo.comments.length,
    //                         }))
    //                     ),
    //             }));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             this.setState({ loading: false });
    //         })
    // }

    // shouldWeLoad = () => {
    //     const { pictures, loading, total } = this.state;
    //     return ((total != null || total > pictures.length) && !loading)
    // }

    // handleScroll = () => {
    //     if (this.shouldWeLoad) {
    //         this.loadItems()
    //     }
    // }

    render() {
        const id = localStorage.getItem('id');
        const token = localStorage.getItem('token');
        console.log(this.props)
        const { pictures, loading } = this.props;
        
        return (
            <Fragment>
                {/* <select id="count">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select> */}
                {/* {token && <Profile token={token} id={id} />} */}
                {/* {pictures.length > 0 && <Gallery onScroll={this.handleScroll} pictures={pictures} />} */}
                <Gallery onScroll={this.handleScroll} pictures={pictures}/>
                <Route path="/posts/:id" component={PostContainer} />
                {/* {loading && <Loader />} */}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    // console.log(state)
    return {
        
        pictures: state.pictures.entries,
        loading: state.pictures.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadImages: () => load(dispatch),
    }
}

export const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryUnmounted);