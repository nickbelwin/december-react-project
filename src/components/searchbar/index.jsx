import ProductCard from "../product-card";
import { useState } from "react";


function SearchBar(props){
    const {classes, inputEvent, text}=props;
    return(
            <input type="text" className={classes} onInput={inputEvent} placeholder="Search here..." />
    );
}
export default SearchBar;