import React from 'react'
import { Copyright } from './styles'

import { AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";


const Footer = function () {
  return (
    <Copyright>
      <h5>Copyright © MatheusBertoldo 2020</h5>
      <div>
        <a href='https://github.com/bertoldosi' target='blank'><FiGithub size={28} /></a>
        <a href='https://www.facebook.com/matheus.bertoldobarros/' target='blank'><RiFacebookLine size={32} /></a>
        <a href='https://www.linkedin.com/in/matheus-bertoldo' target='blank'><RiLinkedinLine size={34} /></a>
      </div>
      <h1>Privacy Policy | Terms of Use</h1>
    </Copyright>
  )
}

export default Footer;
