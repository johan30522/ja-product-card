
import React,{ useContext, CSSProperties, useCallback } from "react";
import { productContext } from "./ProductCard";

import styles from "./../styles/styles.module.css";


export interface Props {
    className?: string;
    activeBtnClass?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({ className, activeBtnClass, style }: Props) => {

    const { counter, handleAdd, maxCount } = useContext(productContext);



    //callback isMaxReached , dependecies: counter,maxCount
    const isMaxReached = useCallback(() => {
        if (maxCount) {
            return counter >= maxCount;
        } else {
            return false;
        }
    }, [counter, maxCount])

    console.log('isMaxReached', isMaxReached());

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                onClick={() => handleAdd(-1)}
                className={`${styles.buttonMinus} ${activeBtnClass}`}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                disabled={isMaxReached()}
                onClick={() => handleAdd(1)}
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.buttonDisabled : activeBtnClass
                    }`}>+</button>

            {/* className={`${styles.buttonAdd} ${activeBtnClass}`}>+</button> */}
        </div>
    )
}
