import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons } from '../.';

 const product = {

    id: 1,
    name: "Coffe Mug",
    price: 10,
    image: ""
  }

const App = () => {
  return (
    <>
       <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
            // maxCount: 10,
          }}

        >

          {
            ({ reset,handleAdd,count, isMaxCountReached}) => (
              <>
                <ProductImg />
                <ProductTitle
                  name={product.name}
                />
                <ProductButtons />
              </>
            )
          }

        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
