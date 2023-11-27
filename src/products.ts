import coffee from './assets/coffee.jpeg';

export type ProductItem = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export const PRODUCTS: ProductItem[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 11.99,
        imageUrl: coffee
    },
    {
        id: 2,
        name: 'Product 2',
        price: 5.50,
        imageUrl: coffee
    },
    {
        id: 3,
        name: 'Product 3',
        price: 7,
        imageUrl: coffee
    },
    {
        id: 4,
        name: 'Product 4',
        price: 7.35,
        imageUrl: coffee
    },
    {
        id: 5,
        name: 'Product 5',
        price: 9,
        imageUrl: coffee
    },
    {
        id: 6,
        name: 'Product 6',
        price: 9.45,
        imageUrl: coffee
    },
    {
        id: 7,
        name: 'Product 7',
        price: 99,
        imageUrl: coffee
    },
    {
        id: 8,
        name: 'Product 8',
        price: 8.50,
        imageUrl: coffee
    },
    {
        id: 9,
        name: 'Product 9',
        price: 11.40,
        imageUrl: coffee
    }
];