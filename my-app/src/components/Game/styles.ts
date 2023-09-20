import { styled } from "styled-components"

export const GameDiv = styled.div`
  background-color: #7fffd4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-height: max-content;
  min-height: 600px;
  width: 90vw;
  max-width: 700px;
  min-width: 300px;
  border: 1px solid #7fffd4;
  border-radius: 1vh;
  text-align: center;
  position: relative;
`

export const Progress = styled.div`
  width: 40vw;
  max-width: 400px;
  position: absolute;
  top: 2%;
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  margin-bottom: 25px;
`

export const ProgressInner = styled.div`
  height: 100%;
  border-radius: 30px;
  width: 50%;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(18, 231, 48, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`
