import React from 'react';
import logo from '../assets/images/mitan_bird.svg';
import medbird from '../assets/images/small.svg';

import MainCard from './MainCard';
import MainLogo from './MainLogo';

const Main = () => {
  return (
    <div className='bg-wh h-[100vh]'>
      <div className='absolute right-0 top-3 '>
        <img src={logo} alt='big-bird' />
      </div>
      <div className='absolute left-10 bottom-0 '>
        <img src={medbird} alt='big-bird' />
      </div>
      <div className='w-full max-w-xs mx-auto'>
        <MainLogo />
      </div>
      <div className='w-full max-w-xs mx-auto'>
        <div className='relative top-10'>
          <MainCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
