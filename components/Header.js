
// components/Header.js
import { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';

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
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  select {
    background: transparent;
    border: none;
    color: black;
    font-size: 1rem;
    margin-left: 0.5rem;
    outline: none;
  }
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
    // background-color: white;
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

  return (
    <>
      <HeaderWrapper>
        <MenuIcon onClick={() => setMenuOpen(true)}>☰</MenuIcon>
        <Logo>
          Kuku<span>FM</span>
        </Logo>
        <SearchBar type="text" placeholder="Search audiobook & stories" />
        <LanguageSelector>
          Languages
          <select>
            <option value="hindi">हिंदी</option>
            <option value="english">English</option>  
            <option value="marathi">मराठी</option>
            <option value="Bangla">বাংলা</option>
            
          </select>
        </LanguageSelector>
        <NavLinks>
          <a href="#free-trial">Get Free Trial</a>
          <a href="#buy-coins">Buy Coins</a>
          <a href="#login">Login / Signup</a>
          <div className="download-icon">⬇</div>
        </NavLinks>
      </HeaderWrapper>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;



// // components/Header.js
// import styled from 'styled-components';

// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   background-color: #ff5733; /* Red background color */
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 2rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   z-index: 1000;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0.5rem 1rem;
//   }
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: white;
//   display: flex;
//   align-items: center;

//   span {
//     background-color: white;
//     color: #ff5733;
//     padding: 0 0.2rem;
//     border-radius: 4px;
//     margin-left: 0.3rem;
//   }

//   @media (max-width: 768px) {
//     margin-bottom: 0.5rem;
//   }
// `;

// const SearchBar = styled.input`
//   width: 300px;
//   padding: 0.5rem;
//   border-radius: 4px;
//   border: none;
//   outline: none;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 0.5rem;
//   }
// `;

// const LanguageSelector = styled.div`
//   color: white;
//   margin-left: 1rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   select {
//     background: transparent;
//     border: none;
//     color: white;
//     font-size: 1rem;
//     margin-left: 0.5rem;
//     outline: none;
//   }

//   @media (max-width: 768px) {
//     margin-left: 0;
//     margin-bottom: 0.5rem;
//   }
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   a {
//     text-decoration: none;
//     color: white;
//     font-weight: 500;
//     padding: 0.5rem 1rem;
//     transition: background-color 0.3s;

//     &:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//       border-radius: 4px;
//     }
//   }

//   .download-icon {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: white;
//     border-radius: 50%;
//     width: 24px;
//     height: 24px;
//     color: #ff5733;
//     font-size: 1.2rem;
//     cursor: pointer;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 0.5rem;
//   }
// `;

// const MenuIcon = styled.div`
//   font-size: 1.5rem;
//   color: white;
//   cursor: pointer;
//   margin-right: 1rem;

//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 0.5rem;
//   }
// `;

// const Header = () => (
//   <HeaderWrapper>
//     <MenuIcon>☰</MenuIcon>
//     <Logo>
//       Kuku<span>FM</span>
//     </Logo>
//     <SearchBar type="text" placeholder="Search audiobook & stories" />
//     <LanguageSelector>
//       Languages
//       <select>
//         <option value="hindi">hindi</option>
//       </select>
//     </LanguageSelector>
//     <NavLinks>
//       <a href="#free-trial">Get Free Trial</a>
//       <a href="#buy-coins">Buy Coins</a>
//       <a href="#login">Login / Signup</a>
//       <div className="download-icon">⬇</div>
//     </NavLinks>
//   </HeaderWrapper>
// );

// export default Header;
