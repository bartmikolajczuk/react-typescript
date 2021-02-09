export type Product = {
    name: string,
    duration: number,
    country: string,
}

export type ProductsListProps = {
    products: Product[],
}
