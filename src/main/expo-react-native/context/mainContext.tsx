import React from "react";

export interface IMainContext {
    currentPage:Number;
    changePage: (number:number) => void;
    currentImage:string;
    changeImage: (s:string) => void;
  }
  
export const defaultState = {
    currentPage: 1,
    changePage: (number:number) => {},
    currentImage:"Select the image",
    changeImage: (s:string) => {}
  };
  
export const MainContext = React.createContext<IMainContext>(defaultState);