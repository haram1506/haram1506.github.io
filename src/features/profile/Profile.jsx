import React from 'react';
import './Profile.css'
import useIntersectionObserver from '../../hooks/useInteractionObserver';

import profileImage from '../../assets/ProfilePicture.jpg'

const description = [
  'Hi, I\'m a game developer currently majoring in Computer Science at Yonsei University.',
  'I am passionate about the entire video game creation process, including development, design, and art. I have developed numerous indie games and am currently involved in several game-related projects. My research interests include technical art, game design, and interactive simulations, as I aim to discover better ways to bridge the artistic and programming fields of game development.'
];

export default function Profile() {
    const [profileRef, isProfileVisible] = useIntersectionObserver({
        threshold: 0.1 // The animation will trigger when 10% of the element is visible
    });

    return (
        <div 
            ref={profileRef}
            className={`profile-margin fade-in-up ${isProfileVisible ? 'is-visible' : ''}`} 
            id="profile"
        >
            <div className="profile-container">
                <img
                    src={profileImage}
                    alt="Profile Picture"
                    className="profile-picture"
                />
                <div className="profile-description">
                    <h3>Haram Bae</h3>
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
