import React from "react";
import { MainContext, defaultState} from './mainContext'

interface Props {
  children: React.ReactNode;
}

export const MainContextProvider: React.FC<Props> = ({ children }) => {
    const [currentPage, setPage] = React.useState(defaultState.currentPage);
    const [currentImage, setImage] = React.useState(defaultState.currentImage);
    
    const changePage = (number: number) => {
        setPage(number);
      };

    const changeImage = (s: string) => {
        setImage(s);
    };
    return (
      <MainContext.Provider
        value={{
          currentPage,
          changePage,
          currentImage,
          changeImage
        }}
      >
        {children}
      </MainContext.Provider>
    );
  };