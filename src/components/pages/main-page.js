import React from 'react';
import MenuList from '../menu-list';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ModifyAllToSalads, GoToMenu, ModifyAllToMeats, ModifyAllToPizzas } from "../../actions"

const MainPage = () => {
    const loc = useLocation();
    const dispatch = useDispatch();
    const locval = useSelector(state => state.reducer.location_val);

    // if(locval === "/" || loc.pathname === "/") {
    //     dispatch(GoToMenu());
    // };

    if(locval === "/salads" || loc.pathname === "/salads") {
        dispatch(ModifyAllToSalads());
    };

    if(locval === "/meats" || loc.pathname === "/meats") {
        dispatch(ModifyAllToMeats());
    };

    if(locval === "/pizzas" || loc.pathname === "/pizzas") {
        dispatch(ModifyAllToPizzas());
    };


    return (
        <MenuList LocEl={loc}/>
    )
}

export default MainPage;
