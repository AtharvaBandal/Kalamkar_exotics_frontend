import * as React from 'react';
interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}
export declare function Dialog({ open, onOpenChange, children }: DialogProps): import("react/jsx-runtime").JSX.Element | null;
interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
export declare function DialogContent({ children, className, ...props }: CommonProps): import("react/jsx-runtime").JSX.Element;
export declare function DialogHeader({ children, className, ...props }: CommonProps): import("react/jsx-runtime").JSX.Element;
export declare function DialogTitle({ children, className, ...props }: CommonProps): import("react/jsx-runtime").JSX.Element;
export {};
