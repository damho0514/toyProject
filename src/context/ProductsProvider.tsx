import { createContext, ReactElement, useEffect, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: 'test',
    name: 'jone',
    price: 15,
  },
  {
    sku: 'test',
    name: 'jone',
    price: 15,
  },
  {
    sku: 'test',
    name: 'jone',
    price: 15,
  },
];

export type UseProductsContextType = { products: ProductType[] };

export const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:5173/products')
        .then((res) => {
          return res.json();
        })
        .catch((error) => {
          if (error instanceof Error) {
            console.log(error.message);
          }
        });
      return data;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);
  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
