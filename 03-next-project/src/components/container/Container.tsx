import React, { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const Container: FC<IProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen max-w-6xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
