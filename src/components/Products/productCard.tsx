import React from 'react';
import Paper from '@material-ui/core/Paper';

type Product = {
    name: string,
    duration: number,
    country: string,
}

const ProductCard = ({ name, duration, country }: Product) => {
    return (
        <>
            <Paper>
            <p>{name}</p>
            <p>{duration}</p>
            <p>{country}</p>
            </Paper>
        </>
    );
}

export default ProductCard;
