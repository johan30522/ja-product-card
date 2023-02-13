import { ProductCard as ProductCardHOC } from './ProductCard';



import { ProductImg } from './ProductImg';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';


// export * from './ProductCard';
export { ProductImg }  from './ProductImg';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Img: ProductImg,
    Title: ProductTitle,
    Buttons: ProductButtons
}); 

export default ProductCard;