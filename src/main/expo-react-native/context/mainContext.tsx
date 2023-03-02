import React from "react";

export interface IMainContext {
    name:String;
    changeName: (name:string) => void;
    currentPage:Number;
    changePage: (number:number) => void;

  }
  
export const defaultState = {
    name: "",
    changeName: (name:string) => {},
    currentPage: 1,
    changePage: (number:number) => {},
  };
  
export const MainContext = React.createContext<IMainContext>(defaultState);