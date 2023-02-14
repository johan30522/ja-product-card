import React from 'react';
import { ProductImg, ProductCard } from '../../src/components';

import renderer from 'react-test-renderer';

import { product1 } from '../data/products';


describe('test for ProductImg', () => {


    test('debe de mostrar el component de imagen', () => {

        const wrapper = renderer.create(<ProductImg image="customImage.png" />).toJSON();
        console.log(wrapper);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el component con  la imagen en su componente', () => {

        const wrapper = renderer.create(

            <ProductCard product={product1}>

           { () =>( <ProductImg />)}


            </ProductCard>
        ).toJSON();


console.log('*******************************************************************');
        console.log('wrapper');

        expect(wrapper).toMatchSnapshot();

    });


    
});
