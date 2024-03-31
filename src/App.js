import React, { useState } from "react";
import "./styles.css";
import { MarkedInput } from "./components/markedInput";
import styled from "styled-components";
import { Result } from "./components/result";
import editorContext from "./editorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <editorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </editorContext.Provider>
  );
}