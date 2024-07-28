// components/Footer.js
import styled from 'styled-components';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #1c1c1e;
  color: #b3b3b3;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    span {
      background-color: white;
      color: #ff5733;
      padding: 0 0.2rem;
      border-radius: 4px;
      margin-left: 0.3rem;
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    a {
      color: #ff5733;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }
  }

  .copyright {
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  div {
    display: flex;
    flex-direction: column;

    h4 {
      color: #ff5733;
      margin-bottom: 1rem;
    }

    a {
      color: #b3b3b3;
      text-decoration: none;
      margin-bottom: 0.5rem;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterLogo>
      <div className="logo">
        Kuku<span>FM</span>
      </div>
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <div className="copyright">
        © 2023 KukuFM All Rights Reserved
      </div>
    </FooterLogo>
    <FooterLinks>
      <div>
        <h4>COMPANY</h4>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Our Team</a>
      </div>
      <div>
        <h4>GENERAL</h4>
        <a href="#">Help & Support</a>
        <a href="#">Blog</a>
        <a href="#">Partner Program</a>
        <a href="#">Kuku FM for Business</a>
        <a href="#">Creator Login</a>
        <a href="#">Kuku FM Pustak</a>
      </div>
      <div>
        <h4>LEGAL</h4>
        <a href="#">Contact Us</a>
        <a href="#">Payments Policy</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Piracy Policy</a>
        <a href="#">Terms and Condition</a>
        <a href="#">Report abuse (DMCA)</a>
      </div>
      <div>
        <h4>GENRES</h4>
        <a href="#">Personal Finance</a>
        <a href="#">Historical</a>
        <a href="#">Information</a>
        <a href="#">Career</a>
        <a href="#">Love</a>
        <a href="#">All Genres</a>
      </div>
    </FooterLinks>
  </FooterWrapper>
);

export default Footer;


// // components/Footer.js
// import styled from 'styled-components';

// const FooterWrapper = styled.footer`
//   background-color: #f8f8f8;
//   padding: 2rem;
//   text-align: center;
//   position: absolute;
//   width: 100%;
//   bottom: 0;

//   a {
//     margin: 0 1rem;
//     color: #333;
//     text-decoration: none;
//   }
// `;

// const Footer = () => (
//   <FooterWrapper>
//     <p>© 2024 KukuFM. All rights reserved.</p>
//     <div>
//       <a href="https://facebook.com">Facebook</a>
//       <a href="https://twitter.com">Twitter</a>
//       <a href="https://instagram.com">Instagram</a>
//     </div>
//   </FooterWrapper>
// );

// export default Footer;
