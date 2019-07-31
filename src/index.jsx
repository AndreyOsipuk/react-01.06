import './assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Profile } from 'components/Profile';
import { GalleryContainer } from 'containers/GalleryContainer';
import { Auth } from 'components/Auth';
import { Modal } from 'components/Modal';

class App extends Component {
    state = {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id'),
        isModalVisible: false,
    }

    handleToggleClick = () => {
        this.setState(prevState => ({ visible: !prevState.visible }))
    }

    handleSuccess = (data) => {
        this.setState({
            token: data.token,
            id: data.user._id,
        }, () => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.user._id);
        });
    }
    handleSignOut = () => {
        this.setState({ token: '' }, () => {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
        });
        event.preventDefault();
    }

    handleModalClose = () => {
        this.setState({
            isModalVisible: false,
        });
    }

    render() {
        const { token, id, isModalVisible } = this.state;
        return (
            //Сделать Боковой значек
            //На сервере, в seeds добавить flowing & flowers
            //Cделать profileContainer
            //margin снизу для body
            <Fragment>
                <p>Corbin78@gmail.com</p>
                <button onClick={this.handleSignOut}>Sign Out</button>
                {!token && <Auth onSuccess={this.handleSuccess} />}
                {token &&
                    <Fragment>
                        <Profile token={token} id={id} />
                        <GalleryContainer token={token} />
                        {isModalVisible &&
                            <Modal onClose={this.handleModalClose} title="Hi! I'm modal">
                                <div>A circular color picker component also named color-wheel performed with react and pure svg. Mobile compatible.</div>
                            </Modal>
                        }
                    </Fragment>
                }
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));