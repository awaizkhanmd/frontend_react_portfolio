import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div >
      <a href="https://github.com/awaizkhanmd" target="_blank">
        <AiFillGithub />
      </a>



    </div>
    <div >
      <a href="https://www.linkedin.com/in/awaiz-khan-64a598158/" target="_blank">
        <AiFillLinkedin />
      </a>



    </div>
   
  </div>
);

export default SocialMedia;