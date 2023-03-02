import React from "react";
import { MainContext, defaultState} from './mainContext'

interface Props {
  children: React.ReactNode;
}

export const GameProvider: React.FC<Props> = ({ children }) => {
    const [name, setName] = React.useState(defaultState.name);
    const [currentPage, setPage] = React.useState(defaultState.currentPage);

    const changeName = (name: string) => {
      setName(name);
    };
    
    const changePage = (number: number) => {
        setPage(number);
      };

    return (
      <MainContext.Provider
        value={{
          name,
          changeName,
          currentPage,
          changePage,
        }}
      >
        {children}
      </MainContext.Provider>
    );
  };