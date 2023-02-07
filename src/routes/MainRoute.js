import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Personal from '../components/Personal';
import Address from '../components/Address'
// import Create from '../components/Create';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} >
        <Route path="/profile" element={<Personal />} />
        <Route path="/profile/address" element={<Address />} />
        </Route>
      {/* <Route path="/create" element={<Create />} /> */}
    </Routes>
  );
};

export default MainRoute;
