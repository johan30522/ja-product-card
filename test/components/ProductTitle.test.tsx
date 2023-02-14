
import React from 'react';

import renderer from 'react-test-renderer';
import { ProductTitle,ProductCard } from '../../src/components';

import { product1 } from '../data/products';





describe('ProductTitle', () => {


    test('debe de mostrar el component con  el nombre del producto', () => {

        const wrapper = renderer.create(<ProductTitle name="Custom Product" />).toJSON();
        console.log(wrapper);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el component con  el nombre del producto', () => {

        const wrapper = renderer.create(

            <ProductCard product={product1}>

           { () =>( <ProductTitle />)}


            </ProductCard>
        ).toJSON();



        console.log(wrapper);

        expect(wrapper).toMatchSnapshot();

    });

});
