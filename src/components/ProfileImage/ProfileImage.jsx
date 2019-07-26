import './ProfileImage.scss';
import React from 'react';

export class ProfileImage extends React.Component {
    render() {
        return (
            <div className="profile-image">
                <img src={this.props.avatar} alt="" />
            </div>
        )
    }
}