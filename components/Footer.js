// components/Footer.js
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
  padding: 2rem;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;

  a {
    margin: 0 1rem;
    color: #333;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 KukuFM. All rights reserved.</p>
    <div>
      <a href="https://facebook.com">Facebook</a>
      <a href="https://twitter.com">Twitter</a>
      <a href="https://instagram.com">Instagram</a>
    </div>
  </FooterWrapper>
);

export default Footer;
