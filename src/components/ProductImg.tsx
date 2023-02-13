import React,{ useContext, CSSProperties } from 'react';
import { productContext } from './ProductCard';
import styles from "./../styles/styles.module.css";


import noimage from "./../assets/no-image.jpg";

export interface Props {
    className?: string;
    image?: string;
    style?: CSSProperties;
}

export const ProductImg = ({ image = '', className, style }:Props
) => {

    const { product } = useContext(productContext);

    let imgToshow = image || product.image || noimage;



    return (

        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={
                imgToshow
            } alt="Product" />
    )
}