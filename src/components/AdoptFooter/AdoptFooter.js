import React from 'react'
import './AdoptFooter.scss'
import {
  BsArrowRight,
  BsTwitter,
  BsBehance,
  BsInstagram,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const AdoptFooter = () => {
  return (
    <div class='footer'>
          <div class='footer-card'>
            <h1 class=''>Main Links</h1>
              <div class='list-container'>
                <ul class='list'>
                  <li class='list list1'>About Us</li>
                  <li class='list list1'>Services</li>
                  <li class='list list1'>Pricing</li>
                  <li class='list list1'>Portfolio</li>
                  <li class='list list1'>Contacts</li>
                  <li class='list list1'>Help</li>
                </ul>
                <ul class='list'>
                  <li class='list list1'>Reviews</li>
                  <li class='list list1'>Best Products</li>
                  <li class='list list1'>categories</li>
                  <li class='list list1'>Brands</li>
                </ul>
            </div>
          </div>
          <div class='footer-card border-end'>
            <h1 class='pb-4'>Get In Touch</h1>
              <div class='col-lg-12'>
                <ul class='list'>
                  <li class='list list1'>New Address</li>
                  <li class='list'>14/A, New Home Town, Nyc</li>
                  <li class='list list1'>Head Quatar</li>
                  <li class='list'>71, Qlex Tower, Onthon, UK</li>
                </ul>
              </div>
              <div>
              <button class="contact-us-btn">
                  Contact Us <BsArrowRight class='arrow-icons'/>
                </button>
              </div>
          </div>
          <div class='footer-card'>
            <h1 class='about'>About</h1>
            <p class='card-description'>Mobirise is a free offline app for 
              Windows and Mac to easily create 
              small/medium websites, landing 
              pages, online resumes and 
              portfolios.</p>
              <h5 class='social-contact'>Social Contact</h5>
              <div class="social-icons-container">
                    <div class="social-icons-containers">
                      <FaFacebookF/>
                    </div>
                    <div class="social-icons-containers">
                      <BsTwitter/>
                    </div>
                    <div class="social-icons-containers">
                      <BsInstagram/>
                    </div>
                    <div class='social-icons-containers'>
                    <BsBehance/>
                    </div>
                  </div>
          </div>
    </div>
  )
}
