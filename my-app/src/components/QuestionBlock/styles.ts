import styled from "styled-components"

export const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const QuestionLabel = styled.label`
  color: white;
  padding: 20px 60px;
  background: #2b65ec;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  min-width: 100px;
  width: 20vw;
  white-space: wrap;
  position: relative;
  transition: 0.4s ease-in-out 0s;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    border: 2px solid #7fffd4;
    left: 19px;
    top: calc(50% - 12px);
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: #7fffd4;
    height: 20px;
    width: 20px;
    left: 21px;
    top: calc(50%-5px);
    transform: scale(5);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out 0s;
  }
`

export const QuestionInput = styled.input`
  display: none;

  &:checked ~ label {
    border-color: #7fffd4;
  }

  &:checked ~ label::before {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`
