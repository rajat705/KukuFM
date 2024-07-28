import { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import Modal from './Modal';  // Import the Modal component

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ff5733;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;

  span {
    background-color: white;
    color: #ff5733;
    padding: 0 0.2rem;
    border-radius: 4px;
    margin-left: 0.3rem;
  }
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const LanguageDropdown = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 200px;

  @media (min-width: 768px) {
    width: 300px;
  }

  .language-option {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    width: 90px;

    @media (min-width: 768px) {
      width: 100px;
    }
  }

  .language-option.checked {
    background-color: #e03c31;
    color: white;
  }

  .apply-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #e03c31;
    color: white;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .language-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
`;

const SelectedLanguage = styled.div`
  color: white;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  }

  .download-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [isModalOpen, setModalOpen] = useState(false);  // State to control modal visibility

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleLoginClick = () => {
    setModalOpen(true);  // Show the modal when "Login / Signup" is clicked
  };

  return (
    <>
      <HeaderWrapper>
        <MenuIcon onClick={() => setMenuOpen(true)}>☰</MenuIcon>
        <Logo>
          Kuku<span>FM</span>
        </Logo>
        <SearchBar type="text" placeholder="Search audiobook & stories" />
        <LanguageSelector>
          <LanguageButton onClick={toggleLanguageDropdown}>
            Languages
          </LanguageButton>
          <SelectedLanguage>
            {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
          </SelectedLanguage>
          <LanguageDropdown open={languageDropdownOpen}>
            <div>Tap to choose audio languages</div>
            <div className="language-grid">
              {[
                'hindi',
                'marathi',
                'bengali',
                'telugu',
                'tamil',
                'malayalam',
                'kannada',
                'english',
              ].map((lang) => (
                <div
                  key={lang}
                  className={`language-option ${
                    selectedLanguage === lang ? 'checked' : ''
                  }`}
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </div>
              ))}
            </div>
            <button className="apply-button" onClick={toggleLanguageDropdown}>
              Apply
            </button>
          </LanguageDropdown>
        </LanguageSelector>
        <NavLinks>
          <a href="#free-trial">Get Free Trial</a>
          <a href="#buy-coins">Buy Coins</a>
          <a href="#login" onClick={handleLoginClick}>Login / Signup</a>  {/* Updated button */}
          <div className="download-icon">⬇</div>
        </NavLinks>
      </HeaderWrapper>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      <Modal show={isModalOpen} onClose={() => setModalOpen(false)} />  {/* Include modal */}
    </>
  );
};

export default Header;
