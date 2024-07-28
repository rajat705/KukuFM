import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px; /* Adjust this value as needed */
  max-width: 80%;
  height: 100%;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease-in-out;
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
    color: #ff5733;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .highlight {
    background-color: #ffecec;
    color: #ff5733;
    font-weight: bold;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

  .copy {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    margin-top: auto;
    width: 100%;
  }
`;

const MobileMenu = ({ isOpen, onClose }) => (
  <MobileMenuWrapper isOpen={isOpen}>
    <div className="close-icon" onClick={onClose}>✕</div>
    <div className="logo">
      Kuku<span>FM</span>
    </div>
    <a href="#login" className="highlight">
      Login / Signup
      <span>→</span>
    </a>
    <a href="#free-trial">Get Free Trial</a>
    <a href="#creators">For Creators</a>
    <a href="#about">About</a>
    <a href="#legal">Legal</a>
    <a href="#support">Help & Support</a>
    <a href="#blog">Blog</a>
    <a href="#download">Download KukuFM app</a>
    <a href="#careers">Careers 🚀</a>
    <div className="copy">Developed by Rajat Nagar ❤️</div>
  </MobileMenuWrapper>
);

export default MobileMenu;
