import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className='home_container'>
      <div className='bg'>
        <div className='content'>
          <div className='text'>
            <h1> <b> BHUMEE </b> </h1>
            <p className='box'>
              <b>Bharose Ki Neev </b>
            </p>
          </div>
          <div className='icon'>
            <p className='icon_cap'> GET STARTED <FaArrowRight></FaArrowRight> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
