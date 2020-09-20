import styled from 'styled-components';

const Content = styled.div`
  margin: 3rem 1rem;
`;

export const Container = styled.div`
  margin-bottom: 3rem;

  .no-result {
    padding: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

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

      @media (min-width: 48em) {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

export const InvestmentColumnHeader = styled.div`
  font-weight: 700;

  .upper-row {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    div {
      &:first-child {
        flex: 3;
        max-width: 21.8rem;
        margin: 1.5rem 0 1.5rem 2.2rem;
      }

      &:not(:first-child) {
        flex: 1;
        margin: 1.5rem 0 1.5rem 1.5rem;
        text-align: center;
      }

      &:nth-child(3) {
        flex: 3;
        display: flex;
        align-items: center;

        &:before {
          content: '';
          flex: 1;
          height: 1px;
          margin-right: 0.5rem;
          background: var(--color-gray);
        }
      }
    }
  }

  .lower-row {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    div {
      flex: 1;
      margin-bottom: 1.5rem;
      text-align: center;

      &:first-child {
        flex: 3.5;
      }

      &:last-child {
        flex: 3;
      }
    }
  }
`;

export const MinimumApplicationFilter = styled.div`
  padding: 2rem 1rem;
`;

export const RiskyFundProfileFilter = styled.div`
  padding: 2rem 1rem;
`;

export const RedeemTimeFilter = styled.div`
  padding: 2rem 1rem;
`;

export const StrategyFilter = styled.div``;

export const ManagersFilter = styled.div`
  margin-top: 1rem;
`;
