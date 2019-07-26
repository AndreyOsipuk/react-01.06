import './ProfileStats.scss';
import React from 'react';
import PropTypes from 'prop-types';

class ProfileStats extends React.Component {
    render() {
        return (
            <div className="profile-stats">
                <ul>
                    <li><span className="profile-stat-count">{this.props.posts}</span> posts</li>
                    <li><span className="profile-stat-count">{this.props.followers}</span> followers</li>
                    <li><span className="profile-stat-count">{this.props.following}</span> following</li>
                </ul>
            </div>
        )
    }
}
ProfileStats.propTypes = {
    posts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
}

export { ProfileStats };