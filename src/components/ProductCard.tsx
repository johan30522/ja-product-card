import React,{CSSProperties} from 'react';
import { createContext } from 'react';
import styles from "./../styles/styles.module.css";


import { useProduct } from '../hooks/useProduct';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';





export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: (arg:ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args:OnChangeArgs) => void;
    //  onChange?: () => void;
    value?: number;
    initialValues?: InitialValues
}

// const productContext=createContext({})
export const productContext = createContext<ProductContextProps>({} as ProductContextProps)

const { Provider } = productContext;


export const ProductCard = ({ children, product, className,style,onChange,value=0, initialValues }: Props) => {


    const { counter, handleAdd,isMaxCountReached,reset } = useProduct({onChange,product,value,initialValues});


    return (

        <Provider value={{
            counter,
            handleAdd,
            product,
            maxCount:initialValues?.maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children && children({
                        count: counter,
                        product: product,
                        handleAdd,
                        isMaxCountReached,
                        reset  
                    })
                }
            </div>
        </Provider>
    )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Img = ProductImg;
// ProductCard.Buttons = ProductButtons;


