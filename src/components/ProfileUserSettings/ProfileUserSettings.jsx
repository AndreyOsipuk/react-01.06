import './ProfileUserSettings.scss';
import React from 'react';

export class ProfileUserSettings extends React.Component {
    render() {
        return (
            <div className="profile-user-settings">
                <h1 className="profile-user-name">{this.props.name}</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                    aria-hidden="true"></i></button>
            </div>
        )
    }
}