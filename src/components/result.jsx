import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export function Result(props) {
  const { markdownText } = useContext(editorContext);

  console.log("Converted Text: ", markdownText);

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown source={markdownText} />
      </ResultArea>
    </Container>
  );
}