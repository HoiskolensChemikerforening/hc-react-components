import styled, { css } from 'styled-components';
import '../index.css';

const H1 = styled.h1`
  font-size: 1.875rem;
  font-weight: 400;
  margin-bottom: 16px;

  ${props => props.gray && css`
    color: var(--gray-80);
  `}

  ${props => props.smallest && css`
    font-size: 1.125rem;
  `}
  ${props => props.smaller && css`
    font-size: 1.25rem;
  `}
  ${props => props.small && css`
    font-size: 1.5rem;
  `}
  ${props => props.big && css`
    font-size: 2.25rem;
  `}
  ${props => props.bigger && css`
    font-size: 3rem;
  `}
  ${props => props.biggest && css`
    font-size: 3.75rem;
  `}

  ${props => props.display1 && css`
    font-size: 4.5rem;
  `}

  ${props => props.bold && css`
    font-weight: 600;
  `}
  ${props => props.italic && css`
    font-style: italic;
  `}
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 16px;

  ${props => props.gray && css`
    color: var(--gray-80);
  `}

  ${props => props.smaller && css`
    font-size: 1.125rem;
  `}
  ${props => props.small && css`
    font-size: 1.25rem;
  `}
  ${props => props.big && css`
    font-size: 1.875rem;
  `}
  ${props => props.bigger && css`
    font-size: 2.25rem;
  `}
  ${props => props.biggest && css`
    font-size: 3rem;
  `}

  ${props => props.bold && css`
    font-weight: 600;
  `}
  ${props => props.italic && css`
    font-weight: 400;
    font-style: italic;
  `}
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 16px;

  ${props => props.gray && css`
    color: var(--gray-80);
  `}

  ${props => props.small && css`
    font-size: 1.125rem;
  `}
  ${props => props.big && css`
    font-size: 1.5rem;
  `}
  ${props => props.bigger && css`
    font-size: 1.875rem;
  `}
  ${props => props.biggest && css`
    font-size: 2.25rem;
  `}

  ${props => props.bold && css`
    font-weight: 600;
  `}
  ${props => props.italic && css`
    font-weight: 400;
    font-style: italic;
  `}
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;

  ${props => props.big && css`
    font-size: 18px;
  `}
  ${props => props.bold && css`
    font-weight: 600;
  `}
  ${props => props.italic && css`
    font-weight: 400;
    font-style: italic;
  `}
`;

export {
  H1,
  H2,
  Text
};