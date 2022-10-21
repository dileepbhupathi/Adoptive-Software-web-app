import React from "react";
import "./AdoptBody.scss";
import {
  BsArrowUp,
  BsPalette,
  BsCodeSlash,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineTouchApp,MdOutlineFormatQuote} from "react-icons/md";
import { Accordion } from "../Accordion/Accordion";

export const AdoptBody = () => {
  return (
    <div class="body">
      <div class="software-company-container">
        <div class="mobile-app-container">
          <p class="software-company-caption">Software Company</p>
          <h1 class='software-company-title'>
            <strong>Mobile App</strong>
          </h1>
          <p class="software-company-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
            porttitor egestas fermentum nulla.
          </p>
          <button class="software-company-button">Get Started</button>
        </div>
      </div>
      <div class="second-container">
        <div class="image-cards-container">
            <div class='images-container'>
            <img
              src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features1.jpg"
              alt="/"
              class="software-company-image-1"
            />
            </div>
          <div class="html-card">
            <h4 class="html-header">HTML,CSS,JS,Python</h4>
            <h1 class="html-caption">What We Do</h1>
            <p class="html-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
              porttitor egestas fermentum nulla.
            </p>
            <ul class="html-list-container">
              <li class="html-list">App Design & Development</li>
              <li class="html-list">Web Development & CMS</li>
              <li class="html-list">Sass & Pos Software Design</li>
            </ul>
            <button class="html-button">Free Consultation</button>
          </div>
        </div>
      </div>
      <div class="third-container">
        <div class="price-plan-container">
          <h5 class="price-plans-caption">Price & plans</h5>
          <h1 class="price-plans-header">Price and Plans</h1>
        </div>
        <div class="price-plan-card-container">
          <div class="price-plan-cards">
            <h5 class="price-plan-card-caption">BASIC</h5>
            <h1 class="price-plan-card-price">
              <strong>$10.00</strong>
            </h1>
            <ul>
              <li class="price-plan-card-list">Lorem ipsum dolor</li>
              <li class="price-plan-card-list">Curabitur id libero </li>
              <li class="price-plan-card-list">Etiam cursus ex </li>
              <li class="price-plan-card-list">Etiam auctor, erat</li>
              <li class="price-plan-card-list">Eleifend arcu nulla</li>
              <li class="price-plan-card-list">Quisque ornare</li>
            </ul>
            <button class="price-plan-card-button">Get Started</button>
          </div>
          <div class="price-plan-cards price-plan-cards1">
            <h5 class="price-plan-card-caption">ADVANCED</h5>
            <h1 class="price-plan-card-price price-plan-card-price1">
              <strong>$99.00</strong>
            </h1>
            <ul>
              <li class="price-plan-card-list">Lorem ipsum dolor</li>
              <li class="price-plan-card-list">Curabitur id libero </li>
              <li class="price-plan-card-list">Etiam cursus ex </li>
              <li class="price-plan-card-list">Etiam auctor, erat</li>
              <li class="price-plan-card-list">Eleifend arcu nulla</li>
              <li class="price-plan-card-list">Quisque ornare</li>
            </ul>
            <button class="price-plan-card-button">Get Started</button>
          </div>
          <div class="price-plan-cards">
            <h5 class="price-plan-card-caption">TEAM</h5>
            <h1 class="price-plan-card-price">
              <strong>$299.00</strong>
            </h1>
            <ul>
              <li class="price-plan-card-list">Lorem ipsum dolor</li>
              <li class="price-plan-card-list">Curabitur id libero </li>
              <li class="price-plan-card-list">Etiam cursus ex </li>
              <li class="price-plan-card-list">Etiam auctor, erat</li>
              <li class="price-plan-card-list">Eleifend arcu nulla</li>
              <li class="price-plan-card-list">Quisque ornare</li>
            </ul>
            <button class="price-plan-card-button">Get Started</button>
          </div>
        </div>
      </div>
      <div class="fourth-container">
        <div class="percentage-container">
          <div class="monthly-income">
            <div class="arrow-icon-container">
              <BsArrowUp class="arrow-icon" />
            </div>
            <div class="percentage-info">
              <h1 class="percentage-caption">5.37%</h1>
              <p class="percentage-description">Monthly income</p>
            </div>
          </div>
          <div class="monthly-income">
            <div class="arrow-icon-container">
              <BsArrowUp class="arrow-icon" />
            </div>
            <div class="percentage-info">
              <h1 class="percentage-caption">8.93%</h1>
              <p class="percentage-description">New clients</p>
            </div>
          </div>
          <div class="monthly-income">
            <div class="arrow-icon-container">
              <BsArrowUp class="arrow-icon" />
            </div>
            <div class="percentage-info">
              <h1 class="percentage-caption">4.25%</h1>
              <p class="percentage-description">Good reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fifth-container">
          <img
            src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features2.jpg"
            alt="/"
            class="software-company-image-2"
          />
        <div class="faq-container">
          <h5 class="faq-title">FAQ</h5>
          <h1 class="faq-caption">Get every answers From here.</h1>
          <div class="accordion-container">
            <div class="accordion">
              <Accordion />
            </div>
            <div class="accordion accordion1">
              <Accordion />
            </div>
            <div class="accordion">
              <Accordion />
            </div>
            <div class="accordion">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <div class="sixth-container">
        <div class="integration-container">
          <h5 class="integration-caption">Intregrations</h5>
          <h1 class="integration-title">Mobile App Intregrations</h1>
        </div>
        <div class="price-plan-card-container">
          <div class="design-container ">
            <div class="design-icon-header-container">
              <div class="design-icon-container">
                <BsPalette class="design-icon" />
              </div>
              <h3 class="design-title">Design</h3>
            </div>
            <div class="design-description-container">
              <p class="design-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="design-read-me-caption">Read More</h5>
            </div>
          </div>
          <div class="design-container ">
            <div class="design-icon-header-container">
              <div class="design-icon-container">
                <BsCodeSlash class="design-icon" />
              </div>
              <h3 class="design-title">Code</h3>
            </div>
            <div class="design-description-container">
              <p class="design-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="design-read-me-caption">Read More</h5>
            </div>
          </div>
          <div class="design-container ">
            <div class="design-icon-header-container">
              <div class="design-icon-container">
                <MdOutlineTouchApp class="design-icon" />
              </div>
              <h3 class="design-title">Testing</h3>
            </div>
            <div class="design-description-container">
              <p class="design-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero.
              </p>
              <h5 class="design-read-me-caption">Read More</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="seventh-container">
        <div class="team-member-header-container">
          <h5 class="team-member-caption">Experts</h5>
          <h1 class="team-member-title">Our Team Members</h1>
        </div>
        <div class="team-container">
          <div class="team-members-container">
            <img
              src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team1.jpg"
              alt="/"
              class="team-container-image"
            />
            <h3 class="team-member-name">John Smith</h3>
            <p class="team-memeber-designation">Programmer</p>
            <div class="team-members-social-network-container">
              <div class="social-network-icon-container">
                <FaFacebookF />
              </div>
              <div class="social-network-icon-container">
                <BsTwitter />
              </div>
              <div class="social-network-icon-container">
                <BsInstagram />
              </div>
            </div>
          </div>
          <div class="team-members-container">
            <img
              src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team2.jpg"
              alt="/"
              class="team-container-image"
            />
            <h3 class="team-member-name">Sarah Palmer</h3>
            <p class="team-memeber-designation">Manager</p>
            <div class="team-members-social-network-container">
              <div class="social-network-icon-container">
                <FaFacebookF />
              </div>
              <div class="social-network-icon-container">
                <BsTwitter />
              </div>
              <div class="social-network-icon-container">
                <BsInstagram />
              </div>
            </div>
          </div>
          <div class="team-members-container">
            <img
              src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team3.jpg"
              alt="/"
              class="team-container-image"
            />
            <h3 class="team-member-name">Adam Swift</h3>
            <p class="team-memeber-designation">Analyst</p>
            <div class="team-members-social-network-container">
              <div class="social-network-icon-container">
                <FaFacebookF />
              </div>
              <div class="social-network-icon-container">
                <BsTwitter />
              </div>
              <div class="social-network-icon-container">
                <BsInstagram />
              </div>
            </div>
          </div>
          <div class="team-members-container">
            <img
              src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team4.jpg"
              alt="/"
              class="team-container-image"
            />
            <h3 class="team-member-name">Helen Smith</h3>
            <p class="team-memeber-designation">Designer</p>
            <div class="team-members-social-network-container">
              <div class="social-network-icon-container">
                <FaFacebookF />
              </div>
              <div class="social-network-icon-container">
                <BsTwitter />
              </div>
              <div class="social-network-icon-container">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="eigth-container">
        <div class="about-us-container">
          <h5 class="about-us-caption">About Us</h5>
          <h1 class="about-us-title">Choose What Matters To Your Software</h1>
          <p class="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod
            temporeum dicant partem scripserit.
          </p>
        </div>
        <div class="progress-container">
          <div class="progress">
            <div class="user-progress-details-container">
              <h5 class="user-progress-caption">User Research</h5>
              <h5 class="user-progress-caption">92%</h5>
            </div>
            <progress min="0" max="100" value="92" class="progress-bar" />
          </div>
          <div class="progress">
            <div class="user-progress-details-container">
              <h5 class="user-progress-caption">UX Focus</h5>
              <h5 class="user-progress-caption">71%</h5>
            </div>
            <progress min="0" max="100" value="71" class="progress-bar" />
          </div>
          <div class="progress">
            <div class="user-progress-details-container">
              <h5 class="user-progress-caption">Clients Support</h5>
              <h5 class="user-progress-caption">53%</h5>
            </div>
            <progress min="0" max="100" value="53" class="progress-bar" />
          </div>
        </div>
      </div>
      <div class="ninth-container">
          <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features3.jpg" alt="/" class='image images1'/>
        <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/features2.jpg" alt="/" class='image images1'/>
        <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/background3.jpg" alt="/" class='image'/>
      </div>
      <div class="tenth-container">
        <div class="client-container">
          <h1 class='client-container-title'>Our Clients</h1>
        </div>
        <div class="image-container">
          <div class="image-containers">
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/1.png" alt="/" className="image1"/>
          </div>
          <div class="image-containers">
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/2.png" alt="/" className="image1"/>
          </div>
          <div class="image-containers">
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/3.png" alt="/" className="image1"/>
          </div>
          <div class="image-containers">
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/4.png" alt="/" className="image1"/>
          </div>
        </div>
      </div>
      <div class="eleventh-container">
          <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/background4.jpg" alt="/" class='image2'/>
        <div class="news-letter-container">
          <div class="new-letter">
            <h3 class='news-letter-caption'>Get Newsletter</h3>
            <h1 class='news-letter-title'>Get every weekly update feeds</h1>
          </div>
          <form class="subscribe-container">
            <input type='text' placeholder='Enter full name'/>
            <input type='text' placeholder='Enter email adress'/>
            <button type="search" class='subscribe-button'> Subscribe Now</button>
          </form>
        </div>
      </div>
      <div class="twelveth-container">
        <div class="testimonials-container">
          <h5 class='testimonial-caption'>Testimonials</h5>
          <h1 class='testimonial-title'>Our Client Feedbacks</h1>
        </div>
        <div class="feedback-cards-container">
          <div class="feedback-container">
            <MdOutlineFormatQuote class='feedback-icon'/>
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team1.jpg" alt="/" class='image3'/>
            <p class='feedback-description'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Vitae curabitur libero felis 
            ullamcorper.
            </p>
            <h2 class='feedback-title'>John Smith</h2>
            <p class='feedback-caption'>Programmer</p>
          </div>
          <div class="feedback-container">
            <MdOutlineFormatQuote class='feedback-icon'/>
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team2.jpg" alt="/" class='image3'/>
            <p class='feedback-description'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Vitae curabitur libero felis 
            ullamcorper.
            </p>
            <h2 class='feedback-title'>Sarah palmer</h2>
            <p class='feedback-caption'>Manager</p>
          </div>
          <div class="feedback-container">
            <MdOutlineFormatQuote class='feedback-icon'/>
            <img src="https://mobirise.com/extensions/softwarem4/mobile-app/assets/images/team3.jpg" alt="/" class='image3'/>
            <p class='feedback-description'>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Vitae curabitur libero felis 
            ullamcorper.
            </p>
            <h2 class='feedback-title'>Adam Swift</h2>
            <p class='feedback-caption'>Designer</p>
          </div>
        </div>
      </div>
      <div class='google-map-container w-100'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14313.005520789404!2d80.21950042488757!3d12.932729768572171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666174127714!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="/" class='google-maps'></iframe>
      </div>
    </div>
  );
};
