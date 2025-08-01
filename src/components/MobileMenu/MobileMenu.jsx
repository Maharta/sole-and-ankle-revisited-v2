import React from 'react';
import styled from 'styled-components';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { NavLink } from '../Header';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onDismiss}>
      <DialogPortal container={document.querySelector('#root')}>
        <Overlay />
        <Content>
          <VisuallyHidden>
            <DialogTitle>Mobile Menu</DialogTitle>
            <DialogDescription>A menu for mobile users.</DialogDescription>
          </VisuallyHidden>

          <DialogClose asChild>
            <CloseButton>
              <StyledIcon id="close" color="black" strokeWidth={1} size={24} />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
          </DialogClose>
          <MobileNavContainer>
            <Filler />
            <MobileNav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </MobileNav>
            <Footer>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
          </MobileNavContainer>
        </Content>
      </DialogPortal>
    </Dialog>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  inset: 0;
  background-color: ${COLORS.overlay};
`;

const Content = styled(DialogContent)`
  background-color: white;
  position: absolute;
  top: 0;
  left: 20%;
  bottom: 0;
  right: 0;
`;

const CloseButton = styled(UnstyledButton)``;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 32px;
  padding-block: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-weight: 500;
  font-size: ${14 / 16}rem;
  text-decoration: none;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export default MobileMenu;
