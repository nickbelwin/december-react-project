import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card";
import { GET_PRODUCT_DATA } from "../../constant/restApiEndPoint";
import { getElementError } from "@testing-library/react";
import "../home/home.css"
import SearchBar from "../../components/searchbar";
import Header from "../../components/header";
import 'remixicon/fonts/remixicon.css'
import Button from "../../components/button";
import { debounce } from "../../utils";
import Loader from "../../components/loader";
import Empty from "../../components/empty";

function Home(){
    const [productsList, setProductsList]= useState({});
    const [searching, setSearching]= useState("");
    const [loader, setLoader]= useState(true);
    async function getProducts(searchdata){
        console.log(searchdata);
        setLoader(true);
        try{
            let getdata= await fetch( searchdata? `https://dummyjson.com/products/search?q=${searchdata}`: GET_PRODUCT_DATA);
            let data= await getdata.json();
            setProductsList(data);
        }catch(error){
            console.error("Error:: ",error);
        }
        setLoader(false);
    }
    function getSearchProducts(e){
        console.log(e.target.value);
        setSearching(e.target.value);
        let url= e.target.value? 
            searching : "";
        getProducts(url);
    }
    const getDebounce= debounce(getSearchProducts,1000);
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
                <SearchBar classes="search" text="Search" inputEvent={getDebounce} />
                <Button classes="login" text="Login" />
                <button className="cart">My<span>_</span>Cart</button>
            </header>
            <div className="productList">
            {!loader && productsList?.products && productsList?.products.length >= 1 && Array.isArray(productsList?.products) ? (productsList?.products.map((val)=>{
               return <ProductCard key={val.id}
                imageUrl={val.thumbnail}
                title={val.title}
                price={val.price}
                rating={val.rating}
                discount={val.discountPercentage}
                />
            })
            ) : loader? 
            (<Loader/>) :
            (<Empty
                classname="empty"
                url="/notFound.webp"
                title={"No Products Found"}
                discription={"Your Search did not match any Products, Please Try again"}
            />)
            }
            </div>
        </div>
    );
}

export default Home;