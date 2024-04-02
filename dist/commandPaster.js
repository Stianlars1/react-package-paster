import { jsx as _jsx } from "react/jsx-runtime";
import { CodeSnippetCodeCopy } from "./components/codeSnippetCodeCopy/codeSnippetCodeCopy";
import { PackageManager } from "./components/packageManager/packageManager";
import "./css/commandPaster.css";
export const CommandPaster = (props) => {
    if ("packageName" in props) {
        return _jsx(PackageManager, { packageName: props.packageName });
    }
    else {
        return (_jsx(CodeSnippetCodeCopy, { codeLanguage: props.codeLanguage, codeSnippet: props.codeSnippet }));
    }
};
