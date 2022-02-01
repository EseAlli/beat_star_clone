import React from 'react';

const Footer = () => {
  return <div className="footer flex flex-col">
      <div className="text-center subscribe-div mb-8">
          <p className="mb-6 subscribe-title">Yes! Send me personalized tips for shopping and selling on BeatStars.</p>
          <div className="input-group sm:inline">
          <i class="fas fa-envelope input-icon"></i>
            <input className="xs:block sm:inline subscribe-input" placeholder="Enter your e-mail"/>
          </div>        
          <button className="btn_subscribe mt-2 sm:inline">Subscribe</button>
      </div>
      <div className="footer-menu">
        <div className="container mx-auto px-4">
            <div className="menu-container mb-4">
                <div className=" flex justify-between menu-content-header">
                    <p className="inline text-lg">BeatStars</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div className="menu-content">
                    <ul className="text-xs font-thin">
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Merch</li>
                        <li>Blog</li>
                        <li>BeatStars.World</li>
                    </ul>
                </div>
            </div>
            <div className="menu-container mb-4">
                <div className="flex justify-between menu-content-header">
                    <p className="inline text-lg">Support</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="menu-container mb-4">
                <div className="flex justify-between menu-content-header">
                    <p className="inline text-lg">Press</p>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
      </div>
      <div>

      </div>
  </div>;
};

export default Footer;
