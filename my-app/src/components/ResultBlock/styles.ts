import { styled } from "styled-components"

export const ResultDiv = styled.div`
  background-color: #7fffd4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: max-content;
  padding-top: 100px;
`

export const ResultButton = styled.button`
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  border-radius: 30px;
  border: 0;
  padding: 15px 30px;
  font-size: 20px;
  background-color: darken(#ff006e, 3%);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`
