import './Profile.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { ProfileImage } from '../ProfileImage/ProfileImage';
import { ProfileUserSettings } from '../ProfileUserSettings/ProfileUserSettings';
import { ProfileStats } from '../ProfileStats/ProfileStats';
import { ProfileBio } from '../ProfileBio/ProfileBio';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <ProfileImage avatar={this.props.avatar} />
                <ProfileUserSettings name={this.props.name} />
                <ProfileStats posts={168} followers={188} following={206} />
                <ProfileBio realname="Jane Doe"/>
            </div>
        )
    }
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export { Profile };