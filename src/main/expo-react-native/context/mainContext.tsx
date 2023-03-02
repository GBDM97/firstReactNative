import React from "react";

export interface IMainContext {
    currentPage:Number;
    changePage: (number:number) => void;
  }
  
export const defaultState = {
    currentPage: 1,
    changePage: (number:number) => {},
  };
  
export const MainContext = React.createContext<IMainContext>(defaultState);