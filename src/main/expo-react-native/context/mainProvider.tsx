import React from "react";
import { MainContext, defaultState} from './mainContext'

interface Props {
  children: React.ReactNode;
}

export const MainContextProvider: React.FC<Props> = ({ children }) => {
    const [currentPage, setPage] = React.useState(defaultState.currentPage);
    
    const changePage = (number: number) => {
        setPage(number);
      };

    return (
      <MainContext.Provider
        value={{
          currentPage,
          changePage,
        }}
      >
        {children}
      </MainContext.Provider>
    );
  };