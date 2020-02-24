import './Profile.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { ProfileImage } from '../ProfileImage';
import { ProfileUserSettings } from '../ProfileUserSettings';
import { ProfileStats } from '../ProfileStats';
import { ProfileBio } from '../ProfileBio';

class Profile extends React.Component {
    state = { loading: true };
    componentDidMount() {
        const { token, id } = this.props;
        // fetch(`http://localhost:8888/api/users/${id}`, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'authorization': `Bearer ${token}`,
        //     },
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             avatar: data.avatar,
        //             firstName: data.firstName,
        //             lastName: data.lastName,
        //             bio: data.bio,
        //             email: data.email,
        //             loading: false,
        //         })
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    render() {
        const { avatar, firstName, lastName, bio, loading } = this.state;
        return (
            <header>
                <div className="container">
                    {!loading &&
                        <div className="profile">
                            <ProfileImage avatar={avatar} />
                            <ProfileUserSettings name={firstName} />
                            <ProfileStats posts={168} followers={188} following={206} />
                            <ProfileBio realname={firstName} bio={bio} />
                        </div>
                    }
                </div>
            </header>
        )
    }
}

//Почему ошибка?!
Profile.propTypes = {
    // avatar: PropTypes.string.isRequired,
    // firstName: PropTypes.string.isRequired,
}

export { Profile };