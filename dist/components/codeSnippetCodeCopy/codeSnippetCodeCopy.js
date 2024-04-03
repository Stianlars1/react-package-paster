import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as dark, oneLight as light, } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon } from "../../assets/copyIcon";
import { copyToClipboard } from "../../utils/copy";
import { useTheme } from "../../utils/utils";
export const CodeSnippetCodeCopy = ({ codeLanguage, codeSnippet, }) => {
    const [textCopied, setTextCopied] = useState(false);
    const handleTextCopied = () => {
        setTextCopied(true);
        setTimeout(() => setTextCopied(false), 2000);
    };
    const isDarkmode = useTheme().theme === "dark";
    return (_jsx(_Fragment, { children: _jsx("div", { className: "code-snippet-manager", children: _jsxs(_Fragment, { children: [_jsx("div", { className: "tabs", children: _jsx("button", { className: `tab-btn code-language-tab active`, children: codeLanguage }) }), _jsxs("div", { className: "tab-content", children: [_jsx(CopyIcon, { onClick: () => copyToClipboard(codeSnippet, () => handleTextCopied()), className: "copy-btn", showSuccessIcon: textCopied }), _jsx(SyntaxHighlighter, { language: "javascript", style: isDarkmode ? dark : light, className: "syntax-highlighter", children: codeSnippet })] })] }) }) }));
};
