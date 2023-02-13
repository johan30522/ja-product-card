import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductImgProps } from '../components/ProductImg';
import { Props as ProductTitleProps } from '../components/ProductTitle';




// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[];
// }

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    handleAdd: (value: number) => void;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Img: (Props: ProductImgProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface OnChangeArgs {
    product: Product;
    counter: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}


export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product:Product;

    handleAdd: (value: number) => void;
    reset: () => void;
}

