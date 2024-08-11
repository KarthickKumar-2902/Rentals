import React from "react";
import ytLogo from '../../assets/youtube.png'
import twitterLogo from "../../assets/twitter.png"
import instagramLogo from "../../assets/instagram.png"


const Footer = () => {
  return <div>
    <section id="abt_section">
    <div className="socials">
        <div className="flous">
            <span>Follow us on</span>
        </div>
        <div className="social_icons">
            <a href="#" target="_blank"><img src={ytLogo} alt="ytlogo"/></a>
            <a href="#" target="_blank"><img src={twitterLogo} alt="twitterlogo"/></a>
            <a href="#" target="_blank"><img src={instagramLogo} alt="instalogo"/></a>
        </div>
    </div>
</section>
<footer>
    <p>&copy; 2023 Rooms Booking. All rights reserved.</p>
</footer>
  </div>;
};

export default Footer;
