import styled from "styled-components"

export const AccordionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35vw;
  min-width: 200px;
  max-width: 500px;
  background: #2b65ec;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding-bottom: 10px;
  height: auto;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
`

export const AccordionTitle = styled.div`
  display: flex;
  width: 32vw;
  min-width: 200px;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.4s ease-in-out 0s;

  &:hover {
    opacity: 0.7;
  }
`

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #add8e6;
  width: 32vw;
  min-width: 200px;
  max-width: 500px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: black;
  height: 250px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7fffd4;
    border-radius: 9em;
  }
`

type QuestionColor = {
  iscorrect: boolean
}

export const AccordionContentQuestion = styled.div<QuestionColor>`
  display: flex;
  flex-direction: column;
  align-items: start;

  & h4 {
    color: ${({ iscorrect }) => (iscorrect ? "#4cc552" : "#9f000f")};
  }
`
