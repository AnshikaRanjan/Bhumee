import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div className='full'>
            <h1> Meet the Team </h1>

            <div className="card-container">

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Anshika Ranjan</p>
                    <button> <a href='https://anshikaranjan.github.io/React-Task-6/' target='_blank'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/anshika-ranjan-0b6255228'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/AnshikaRanjan'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://instagram.com/anshika.37?igshid=ZDdkNTZiNTM= '> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Sharath Harikumar </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/sharath-harikumar-451a801a0/'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/HEADHUNTER2003'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://www.instagram.com/sharath_harikumar/'> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Vrushti Patel </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/vrushti-patel-97b748273/'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/Vrushti0812'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://www.instagram.com/vrushti_473?igsh=MXJuNm5hbnhub2h4dw=='> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Varnika Bansal </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/varnikabansal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='http://www.github.com/varnika-3004'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='https://www.instagram.com/varnika.3004?igsh=bzU5MTdsejB0M3Vs'> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>

                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="pic" />
                    <p> Subhangi Saha </p>
                    <button> <a href='#'> Know More  </a> <FaArrowRight></FaArrowRight></button>
                    <div className='icon'>
                    <a href='https://www.linkedin.com/in/subhanghi-saha-899b3022b/'><FaLinkedin className='icon1'></FaLinkedin>  </a>
                    <a href='https://github.com/subhanghi1'><FaGithub className='icon1'></FaGithub>  </a>
                    <a href='#'> <FaInstagram className='icon1'></FaInstagram> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
