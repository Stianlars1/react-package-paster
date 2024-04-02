import { jsxs as _jsxs } from "react/jsx-runtime";
export const PackageManagerSnippet = ({ command, packageManager, packageName, }) => {
    return (_jsxs("div", { className: "package-manager-code-snippet-container", children: [_jsxs("span", { className: "package-manager", children: [packageManager, " "] }), _jsxs("span", { className: "package-command", children: [command, " ", packageName] })] }));
};
