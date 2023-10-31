import React, { ReactNode } from "react";
import { ImageProps } from "../types/ImageProps";


const Image = ({ src, alt, children }: ImageProps) => {
  return (
    <div>
      <img src={src} alt={alt}>
        {children}
      </img>
    </div>
  );
};

export default Image