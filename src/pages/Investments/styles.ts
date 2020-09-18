import styled from 'styled-components';

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
