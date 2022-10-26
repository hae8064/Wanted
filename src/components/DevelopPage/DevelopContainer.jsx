import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import GridContainer from './GridContainer/GridContainer';
import DevHeader from './Header/DevHeader';

const DevelopContainer = () => {
  return (
    <>
      <DevHeader />
      <Bookmark />
      <GridContainer />
    </>
  );
};

export default DevelopContainer;
