import React from 'react'; 
import ListPage from '../app-pages/listPage';
import InsertName from '../app-pages/insertName';
import { MainContext } from '../context/mainContext';


export default function MainScreen() {
    const { currentPage, changePage } = React.useContext(MainContext);
    return (<InsertName/>)

}; 
