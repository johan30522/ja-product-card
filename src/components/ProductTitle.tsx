import React,{ useContext,CSSProperties } from "react";
import { productContext } from "./ProductCard";
import styles from "./../styles/styles.module.css";



export interface Props {
    name?: string;
    className?: string;
    style?: CSSProperties;
}


export const ProductTitle = ({ name = '' ,className='',style }: Props) => {

    const { product } = useContext(productContext);

    let nameToShow = name || product.name;

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{nameToShow}</span>
    )
}