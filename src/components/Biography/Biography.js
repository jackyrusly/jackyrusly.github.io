import React from 'react';
import './Biography.scss';

const Biography = () => (
  <div id="biography-container">
    <h1>Biography</h1>
    <div className="item-event current">
      <span className="date">2019</span>
      <div className="event-content">
        <h4>Software Engineer</h4>
        <h5>Lemonilo</h5>
        <p className="period">March 2019 - Present</p>
        <p>Currently work here.</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2018</span>
      <div className="event-content">
        <h4>Full Stack Developer</h4>
        <h5>VIP Plaza</h5>
        <p className="period">August 2018 - January 2019</p>
        <p>
          I worked as a Full Stack Developer at VIP Plaza for 6 months. While in the company, I develop <a href="https://m.vipplaza.co.id" target="_blank" rel="noopener noreferrer">VIP Plaza Progressive Web App</a>.
        </p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2017</span>
      <div className="event-content">
        <h4>Software Developer</h4>
        <h5>Moonlay Technologies</h5>
        <p className="period">May 2017 - July 2018</p>
        <p>
          I worked as a Software Developer at Moonlay Technologies for 1 year and 3 months. While in the company, I develop and maintenance Moonlay Technologies clients application.
        </p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2015</span>
      <div className="event-content">
        <h4>Junior Programmer</h4>
        <h5>IT Division Bina Nusantara</h5>
        <p className="period">March 2015 - February 2017</p>
        <p>I worked as a Junior Programmer at Bina Nusantara IT Division for 2 years. While in the company, I develop <a href="https://binusmaya.binus.ac.id" target="_blank" rel="noopener noreferrer">Binusmaya 5</a> and maintenance Binus University internal applications.</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2013</span>
      <div className="event-content">
        <h4>College</h4>
        <h5>Bina Nusantara University</h5>
        <p className="period">2013 - 2017</p>
        <p>Information Technology <br />GPA: 3.76</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2010</span>
      <div className="event-content">
        <h4>Senior High School</h4>
        <h5>SMA Swasta Methodist 2 - Medan</h5>
        <p className="period">2010 - 2013</p>
        <p>IPA</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2007</span>
      <div className="event-content">
        <h4>Junior High School</h4>
        <h5>SMP Negeri 1 - Lhokseumawe</h5>
        <p className="period">2007 - 2010</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">2001</span>
      <div className="event-content">
        <h4>Primary School</h4>
        <h5>SD Negeri 4 - Lhokseumawe</h5>
        <p className="period">2001 - 2007</p>
      </div>
    </div>
    <div className="item-event">
      <span className="date">1999</span>
      <div className="event-content">
        <h4>Kindergarten</h4>
        <h5>TK Budi Dharma - Lhokseumawe</h5>
        <p className="period">1999 - 2001</p>
      </div>
    </div>
    <div className="item-event last">
      <span className="date">1995</span>
      <div className="event-content">
        <h4>Born</h4>
      </div>
    </div>
  </div>
);

export default Biography;
