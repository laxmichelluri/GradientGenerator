// Style your elements here

import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 50%;
  list-style: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  text-align: center;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
