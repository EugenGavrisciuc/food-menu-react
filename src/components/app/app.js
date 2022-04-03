import React from 'react';
import {CartPage} from '../pages';
import AppHeader from '../app-header';
import {Routes, Route} from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails"
import Layout from '../Layout/Layout';
import TransferMenuLinkName from "../resto-service-context/TransferMenuLinkName";
import ModalSuccessWindows from "../ModalSuccessWindow/ModalSuccessWindows"

import Background from './food-bg.jpg';

const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Routes>
            
            <Route path="/" element={<TransferMenuLinkName.Provider value={"menu"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/menu/:id' element={<ItemDetails/>}/>
            </Route>
            
            <Route path='/salads' element={<TransferMenuLinkName.Provider value={"salads"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/salads/:id' element={<ItemDetails/>}/>
            </Route>

            <Route path='/meats' element={<TransferMenuLinkName.Provider value={"meats"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/meats/:id' element={<ItemDetails/>}/>
            </Route>

            <Route path='/pizzas' element={<TransferMenuLinkName.Provider value={"pizzas"}><Layout/></TransferMenuLinkName.Provider>}>
                <Route path='/pizzas/:id' element={<ItemDetails/>}/>
            </Route>

                <Route path="cart" element={<CartPage/>}/>
            </Routes>
            <ModalSuccessWindows/>
        </div>
    )
}

export default App;