import React from 'react';
import ProfilePage from '@/components/profile';

const Profile: React.FC = () => {
  return (
    <ProfilePage
      name="John Doe"
      bio="I'm a software engineer passionate about building scalable and user-friendly applications. In my free time, I enjoy hiking and photography."
      email="john.doe@example.com"
      profilePicture="https://via.placeholder.com/150"
      location="New York, USA"
      website="https://johndoe.com"
    />
  );
};

export default Profile;