import React from "react";
import { CodeSnippetCodeCopy } from "./components/codeSnippetCodeCopy/codeSnippetCodeCopy";
import { PackageManager } from "./components/packageManager/packageManager";
import "./css/commandPaster.css";
import { CommandPasterProps } from "./types/types";

export const CommandPaster: React.FC<CommandPasterProps> = (props) => {
  if ("packageName" in props) {
    return <PackageManager packageName={props.packageName} />;
  } else {
    return (
      <CodeSnippetCodeCopy
        codeLanguage={props.codeLanguage}
        codeSnippet={props.codeSnippet}
      />
    );
  }
};
