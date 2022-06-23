import React from 'react';

import { FooterContainer, FooterLink, FooterReferenceText } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterReferenceText>
        Based on{' '}
        <FooterLink href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer">
          The Cat API
        </FooterLink>
        , 2022
      </FooterReferenceText>
    </FooterContainer>
  );
};

export default Footer;
