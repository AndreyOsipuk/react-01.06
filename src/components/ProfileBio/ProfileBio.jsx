import './ProfileBio.scss';
import React from 'react';

export class ProfileBio extends React.Component {
    render() {
        return (
            <div className="profile-bio">
                <p><span className="profile-real-name">{this.props.realname}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit
                 📷✈️🏕️
                </p>
            </div>
        )
    }
}