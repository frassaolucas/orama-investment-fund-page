import styled from 'styled-components';

const Content = styled.div`
  margin: 3rem 1rem;
`;

export const Container = styled.div``;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem 1.5rem;

  color: #fff;
  text-align: center;

  h1 {
    margin-bottom: 2rem;

    font-family: 'Roboto Slab', serif;
    font-size: 3.5rem;
    line-height: 1.3;

    @media (min-width: 30em) {
      font-size: 4.8rem;
    }
  }

  p {
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const Legends = styled(Content)`
  margin: 3rem 1rem;

  p {
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    color: var(--color-gray);

    @media (min-width: 48em) {
      display: flex;
      justify-content: space-between;
    }
  }

  li {
    display: flex;
    align-items: center;

    + li {
      margin-top: 1rem;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Search = styled(Content)`
  background: #fff;
  border-radius: var(--border-radius);
`;

export const InvestmentList = styled(Content)``;
