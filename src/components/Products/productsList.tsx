import React from 'react';
import ProductCard from './productCard';
import { Product } from '../../types';
import {Grid} from "@material-ui/core";

type ProductsListProps = {
    products: Product[],
}

const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <Grid container>
            {products.map((product: Product) => (
                <Grid xs={12} md={6} spacing={6}>
                <ProductCard
                    name={product.name}
                    duration={product.duration}
                    country={product.country}
                />
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductsList;
