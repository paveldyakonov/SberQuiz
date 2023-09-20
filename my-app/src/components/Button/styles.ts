import styled from "styled-components"

export const MainButton = styled.button`
  padding: 5px 10px;
  background-color: #5865f2;
  color: white;
  outline: none;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.4s ease-in-out 0s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.7;
  }
`
