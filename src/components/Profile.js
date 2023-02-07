import React from 'react';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom'
// import ProfileRoute from '../routes/ProfileRoute';

const Profile = () => {
  return (
    <div>
      <div>
        <Link to="/profile">Personal Information</Link>
        <Link to="/profile/address">Address Information</Link>
      </div>
      <Outlet />
      {/* <ProfileRoute /> */}
    </div>
  );
};

export default Profile;
