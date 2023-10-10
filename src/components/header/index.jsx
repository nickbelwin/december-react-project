import Home from "../../screens/home";
import { GET_PRODUCT_DATA } from "../../constant/restApiEndPoint";
import SearchBar from "../searchbar";
import { useState } from "react";
function Header(){

    const [productsList, setProductsList]= useState({});
    async function getProducts(nick){
        console.log(nick);
        try{
            let getdata;
            if(nick){
                getdata= await fetch(  `https://dummyjson.com/products/search?q=${nick}`);
            }
            else{
                getdata= await fetch(  GET_PRODUCT_DATA);
            }
            let data= await getdata.json();
            setProductsList(data);
        }catch(error){
            console.error("Error:: ",error);
        }
    }
    function getSearchProducts(e){
        console.log(e.target.value);
        getProducts(e.target.value)
    }

    return(
        <header className="head">
            <div>
                <h1>Shop-Kart</h1>
                <select>
                    <option value="">Mumbai</option>
                </select>
            </div>
            <SearchBar text="Search" inputEvent={getSearchProducts} />
            <div>
                <button>My Cart</button>
            </div>
        </header>
    );
}

export default Header;