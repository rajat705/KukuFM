// components/MobileMenu.js
import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px; /* Adjust this value as needed */
  max-width: 80%;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  z-index: 1500;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-bottom: 1rem;
  }

  .close-icon {
    font-size: 1.5rem;
    align-self: flex-end;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff5733;
    display: flex;
    align-items: center;

    span {
      background-color: #ff5733;
      color: white;
      padding: 0 0.2rem;
      border-radius: 4px;
      margin-left: 0.3rem;
    }
  }
`;

const MobileMenu = ({ isOpen, onClose }) => (
  <MobileMenuWrapper isOpen={isOpen}>
    <div className="close-icon" onClick={onClose}>✕</div>
    <div className="logo">
      Kuku<span>FM</span>
    </div>
    <a href="#login">Login / Signup</a>
    <a href="#free-trial">Get Free Trial</a>
    <a href="#creators">For Creators</a>
    <a href="#about">About</a>
    <a href="#legal">Legal</a>
    <a href="#support">Help & Support</a>
    <a href="#blog">Blog</a>
    <a href="#download">Download KukuFM app</a>
    <a href="#careers">Careers 🚀</a>
    <div className="copy">Made with ❤️ in India</div>
  </MobileMenuWrapper>
);

export default MobileMenu;