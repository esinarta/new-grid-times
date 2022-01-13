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
          <Button>
            Subscribe
          </Button>
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

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} { 
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} { 
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} { 
    align-items: center;
    justify-content: revert;
    justify-items: start;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const SubscribeContainer = styled.div`
  display: none;
  
  @media ${QUERIES.laptopAndUp} { 
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: center;
    align-self: end;
    gap: 8px;
  }
`;

const SubscribeLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${14 / 16}rem;
  text-decoration: underline;
  font-style: italic;
`;

export default Header;
