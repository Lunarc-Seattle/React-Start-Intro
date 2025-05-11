import React, { Children } from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // ✅ 加上这行
  onClose:()=> void;
}

export const Alert = ({ children, onClose}: Props) => {
  return <div className="alert alert-primary alert-dismissible">
    {children}
    <button type="button" className="btn-close" onClick = {onClose} data-bs-dismiss = "ale"></button>
    </div>;
};
