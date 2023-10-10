import { useEffect, useState } from "react";
import Button from "../button";
import "./card.css";
import Tag from "../tag";

const ProductCard = (props)=>{
    const {imageUrl, title, price, rating, discount}= props;
    return(
            <div className="product-card-cont">
                {discount && <Tag classes="tag" discountprice={`${discount}% off`} />}
                <div className="img-cover">
                    <img src={imageUrl} alt="Product Image" />
                </div>
                <span className="title">{title} <span>★ {rating}</span></span>
                <div className="footer">
                    <span className="price">${price}</span>
                    <Button classes="btn" text="Add" />
                </div>
            </div>
    );
}

export default ProductCard;