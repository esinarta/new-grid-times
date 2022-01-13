import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeContainer>
          <SubscribeButton>
            Subscribe
          </SubscribeButton>
          <SubscribeLink href="/subscribe">
            Already a subscriber?
          </SubscribeLink>
        </SubscribeContainer>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} { 
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const DesktopActionGroup = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} { 
    display: flex;
    gap: 24px;
  
    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
      display: block;
    }
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} { 
    justify-content: space-between;
  }
`;

const SubscribeContainer = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} { 
    display: flex;
    flex-direction: column;
  }
`;

const SubscribeButton = styled(Button)`
  background: ${COLORS.primary};
`

const SubscribeLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${14 / 16}rem;
  align-self: center;
  margin-top: 8px;
  text-decoration: underline;
  font-style: italic;
`;

export default Header;
