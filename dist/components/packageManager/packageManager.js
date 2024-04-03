import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { CopyIcon } from "../../assets/copyIcon";
import { packageManagersKeyAndCommands, tabs } from "../../utils/constants";
import { copyToClipboard } from "../../utils/copy";
import { PackageManagerSnippet } from "../packageManagerSnippet/packageManagerSnippet";
export const PackageManager = ({ packageName, }) => {
    const [activeTab, setActiveTab] = useState(tabs.npm);
    const [textCopied, setTextCopied] = useState(false);
    const handleTextCopied = () => {
        setTextCopied(true);
        setTimeout(() => setTextCopied(false), 2000);
    };
    const RenderPackageManagerTabs = () => Object.keys(packageManagersKeyAndCommands).map((manager) => {
        manager;
        return (_jsx("button", { className: `tab-btn ${activeTab === manager ? "active" : ""}`, onClick: () => setActiveTab(manager), children: manager }, manager));
    });
    const RenderPackageManagerContent = () => Object.entries(packageManagersKeyAndCommands).map(([manager, command]) => activeTab === manager && (_jsxs("div", { className: `tab-content ${textCopied ? "copied" : ""}`, children: [_jsx(CopyIcon, { onClick: () => copyToClipboard(`${manager} ${command} ${packageName}`, () => handleTextCopied()), className: "copy-btn", showSuccessIcon: textCopied }), _jsx("pre", { children: _jsx("code", { children: _jsx("span", { children: _jsx(PackageManagerSnippet, { command: command, packageManager: manager, packageName: packageName || "" }) }) }) })] }, manager)));
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "code-snippet-manager", children: [_jsx("div", { className: "tabs", children: _jsx(RenderPackageManagerTabs, {}) }), _jsx(RenderPackageManagerContent, {})] }) }));
};
