import './assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'

import { GalleryContainer } from 'containers/GalleryContainer';
import { Auth } from 'components/Auth';
import { Modal } from 'components/Modal';
import { CommentsHoc } from 'components/CommentsHoc';
import { store } from './store';

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
        this.props.history.replace('/')
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
            //Разобраться с route 4
            <Fragment>
                <p>Jovanny_Sauer@gmail.com</p>
                {/* <CommentsHoc /> */}
                {token && <button onClick={this.handleSignOut}>Sign Out</button>}
                {/* {!token && <Auth onSuccess={this.handleSuccess} />} */}
                <Link to='/'>Home</Link>
                <Link to='/auth'>Auth</Link>
                {/* {token && <Profile token={token} id={id} />} */}
                <Switch>
                    {/* {exact - cтрогое сравнение} */}
                    {/* <Route path='/auth' component={<Auth onSuccess={this.handleSuccess} />} exact /> */}
                    <Route path='/' render={(props) => (
                        <GalleryContainer {...props} />
                    )} />
                    <Route path='/auth' render={(props) => (
                        <Auth {...props} onSuccess={this.handleSuccess} />
                    )} />
                </Switch>
                {token &&
                    <Fragment>
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

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);