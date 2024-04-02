import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CopyIcon = ({ onClick, className = " ", showSuccessIcon = false, }) => {
    if (showSuccessIcon) {
        return (_jsxs("svg", { stroke: "currentColor", fill: "none", strokeWidth: "1", viewBox: "0 0 24 24", strokeLinecap: "round", strokeLinejoin: "round", height: "32px", width: "32px", xmlns: "http://www.w3.org/2000/svg", className: `copy-icon ${className}`, children: [_jsx("path", { d: "m12 15 2 2 4-4" }), _jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), _jsx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })] }));
    }
    return (_jsxs("svg", { stroke: "currentColor", fill: "none", strokeWidth: "1", viewBox: "0 0 24 24", strokeLinecap: "round", strokeLinejoin: "round", height: "32px", width: "32px", xmlns: "http://www.w3.org/2000/svg", className: `copy-icon ${className}`, onClick: () => onClick(), children: [_jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), _jsx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })] }));
};
