import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const mobileNavButtonRef = useRef(null);

  const onDialogStateChange = (state) => {
    setShowMobileMenu(state);

    if (state === false && mobileNavButtonRef.current) {
      setTimeout(() => {
        mobileNavButtonRef.current.focus();
      }, 0);
    }
  };

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <MobileNavButton>
            <Icon id="shopping-bag" color="black" />
          </MobileNavButton>
          <MobileNavButton>
            <Icon id="search" color="black" />
          </MobileNavButton>
          <MobileNavButton
            onClick={() => setShowMobileMenu(true)}
            ref={mobileNavButtonRef}
          >
            <Icon id="menu" color="black" />
          </MobileNavButton>
        </MobileActions>
        <Side />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={onDialogStateChange} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(2rem, 3.6vw + 1rem, 4.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileActions = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const MobileNavButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
  padding-block: 4px;

  &:hover {
    background: ${COLORS.gray[100]};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:active {
    background: ${COLORS.gray[200]};
  }
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex-grow: 0;

    ${MainHeader} > &:last-of-type {
      display: none;
    }
  }
`;

export default Header;
