import React from 'react';
import { ProductCard } from '../../src/components';

import renderer from 'react-test-renderer';

import { product1 } from '../data/products'

const { act } = renderer;


describe('ProductCard', () => {

    test('debe mostrar el componente correctamnete', () => {

        const wrapper = renderer.create
            (

                <ProductCard product={product1} >
                    {
                        () => (
                            <h1>Product Card</h1>
                        )
                    }
                </ProductCard>

            ).toJSON();
        console.log(wrapper);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de incrementar el contador', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ({ count, handleAdd }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button
                                onClick={() => handleAdd(1)}
                            ></button>

                        </>


                    )
                }
            </ProductCard>
        );

        console.log(wrapper.toJSON());

        let tree = wrapper.toJSON();
        act(
            () => {
                (tree as any).children[2].props.onClick();
            }
        )


        // (tree as any).children[2].props.onClick();

        tree = wrapper.toJSON();

        // console.log((tree as any).children[1].children[0]);


        expect((tree as any).children[1].children[0]).toBe('0');

        // expect(tree).toMatchSnapshot();





    }
    );

});