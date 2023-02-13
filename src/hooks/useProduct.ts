import { useState, useEffect, useRef } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';




interface props {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: props) => {

     console.log('initialValues', initialValues);

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);



    const handleAdd = (value: number) => {


        const { maxCount } = initialValues || {};

        if (maxCount && counter + value > maxCount) return;

        setCounter(prev => Math.max(0, prev + value));

        onChange && onChange({ product, counter: counter + value });

    }

    useEffect(() => {

        if (!isMounted.current) return;
        console.log('value', value);

        setCounter(value);


    }, [value])

    useEffect(() => {
        setCounter(initialValues?.count || 0);
        isMounted.current = true;
    }, [])

    const reset = () => {
        setCounter(0);
    }





    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount, 
        handleAdd,
        reset
    }

}
