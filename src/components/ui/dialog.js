import { jsx as _jsx } from "react/jsx-runtime";
export function Dialog({ open, onOpenChange, children }) {
    return open ? (_jsx("div", { className: "dialog-backdrop", onClick: () => onOpenChange(false), children: _jsx("div", { className: "dialog-content", onClick: (e) => e.stopPropagation(), children: children }) })) : null;
}
export function DialogContent({ children, className = '', ...props }) {
    return (_jsx("div", { className: `dialog-inner-content ${className}`, ...props, children: children }));
}
export function DialogHeader({ children, className = '', ...props }) {
    return (_jsx("div", { className: `dialog-header text-center mb-4 ${className}`, ...props, children: children }));
}
export function DialogTitle({ children, className = '', ...props }) {
    return (_jsx("h2", { className: `dialog-title text-xl font-semibold text-gray-800 ${className}`, ...props, children: children }));
}
