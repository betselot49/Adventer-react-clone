import "./Contact.css"
import callIcon from "../../images/call-icon.png"
import mailIcon from "../../images/mail-icon.png"
import linkedin from "../../images/linkedin-icon.png"
import instagramIcon from "../../images/instagram-icon.png"
import fbIcon from "../../images/fb-icon.png"
import twitterIcon from "../../images/twitter-icon.png"

const Contact = () => {
  return (
    <>
      <div class="footer-container">
        <div class="bg-footer">
          <div class="text-box">
            <input
              class="subscribe-bar"
              type="text"
              placeholder="Enter your email"
            />
            <button class="subscribe-btn">Subscribe</button>
          </div>
          <div class="call-info">
            <img
              class="call-icon"
              src={callIcon}
              alt="Call icon"
            />
          </div>
          <div class="call-info">
            <p class="phone">Call +01 1234567890</p>
          </div>
          <div class="call-info">
            <img src={mailIcon } alt="" />
          </div>
          <div class="call-info">
            <p class="email">demo@gmail.com</p>
          </div>
          <div class="call-info">
            <div class="social-media">
              <img
cd                 src={linkedin}
                alt=""
              />
              <img
                class="social-media"
                src={instagramIcon}
                alt=""
              />
              <img class="social-media" src={fbIcon} alt="" />
              <img class="social-media" src={twitterIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        2020 All Rights Reserved. Design by Free html Templates
      </div>
    </>
  );
};

export default Contact;
