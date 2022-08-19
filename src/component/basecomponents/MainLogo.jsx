import React from 'react';
import logo from '../assets/images/mitan_logo.svg';

const MainLogo = () => {
  return (
    <div className='relative top-5 bottom-5'>
      <img src={logo} alt='logo' className='mx-5' />
    </div>
  );
};

export default MainLogo;
