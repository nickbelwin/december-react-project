import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card";
import { GET_PRODUCT_DATA } from "../../constant/restApiEndPoint";
import { getElementError } from "@testing-library/react";
import "../home/home.css"
import SearchBar from "../../components/searchbar";
import Header from "../../components/header";
import 'remixicon/fonts/remixicon.css'
import Button from "../../components/button";

function Home(){
    const [productsList, setProductsList]= useState({});
    const [searching, setSearching]= useState("");
    async function getProducts(searching){
        console.log(searching);
        try{
            let getdata= await fetch( searching? `https://dummyjson.com/products/search?q=${searching}`: GET_PRODUCT_DATA);
            let data= await getdata.json();
            setProductsList(data);
        }catch(error){
            console.error("Error:: ",error);
        }
    }
    function getSearchProducts(e){
        console.log(e.target.value);
        if(e.target.value){
            setSearching(e.target.value)
            getProducts(searching);
        }
        else{
            setSearching("");
            getProducts(searching);
        }
    }
    useEffect(()=>{
        getProducts();
    }, []);
    return(
        <div className="homeDiv">
            <header className="head">
                <h1>ShopKart</h1>
                <select>
                    <option value="">Mumbai</option>
                </select>
                <SearchBar classes="search" text="Search" inputEvent={getSearchProducts} />
                <Button classes="login" text="Login" />
                <button className="cart">My<span>_</span>Cart</button>
            </header>
            <div className="productList">
            {productsList?.products && Array.isArray(productsList?.products) && productsList?.products.map((val)=>{
               return <ProductCard key={val.id}
                imageUrl={val.thumbnail}
                title={val.title}
                price={val.price}
                rating={val.rating}
                discount={val.discountPercentage}
                />
            })}
            </div>
        </div>
    );
}

export default Home;