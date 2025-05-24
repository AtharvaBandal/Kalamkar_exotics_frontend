import * as React from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return open ? (
    <div className="dialog-backdrop" onClick={() => onOpenChange(false)}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
}

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({ children, className = '', ...props }: CommonProps) {
  return (
    <div className={`dialog-inner-content ${className}`} {...props}>
      {children}
    </div>
  );
}

export function DialogHeader({ children, className = '', ...props }: CommonProps) {
  return (
    <div className={`dialog-header ${className}`} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className = '', ...props }: CommonProps) {
  return (
    <h2 className={`dialog-title ${className}`} {...props}>
      {children}
    </h2>
  );
}