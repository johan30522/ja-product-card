# JA-Product-Cart

Este es un paquete de prueba de despliegue en NPM

### Johan Arroyo

## Instalación

```

import {
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductButtons,
} from 'ja-product-cart'

```


```

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

```