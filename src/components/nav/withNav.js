import React from 'react';
import { Outlet } from 'react-router';
import Nav from './nav';

export default () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  );
};